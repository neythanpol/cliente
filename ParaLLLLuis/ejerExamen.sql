-- 1
-- A)

SET SERVEROUTPUT ON

CREATE OR REPLACE FUNCTION contarAlquileresPorMatricula(
    p_matricula IN VARCHAR2
) RETURN NUMBER
IS
    v_count NUMBER;
BEGIN
    SELECT COUNT(*)
    INTO v_count
    FROM COCHE
    WHERE matricula = p_matricula;

    IF v_count = 0 THEN
        RETURN -1;
    ELSE
        SELECT COUNT(*)
        INTO v_count
        FROM ALQUILER
        WHERE idCoche = (SELECT idCoche FROM COCHE WHERE matricula = p_matricula);

        RETURN v_count;
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        RETURN -1;
    WHEN OTHERS THEN
        DBMS_OUTPUT.PUT_LINE(SQLCODE);
END contarAlquileresPorMatricula;
/

-- B)


SET SERVEROUTPUT ON;

DECLARE
    v_num_alquileres NUMBER;
BEGIN
    v_num_alquileres := contarAlquileresPorMatricula('3001NDR');
    
    IF v_num_alquileres = -1 THEN
        DBMS_OUTPUT.PUT_LINE('El coche no existe.');
    ELSIF v_num_alquileres = 0 THEN
        DBMS_OUTPUT.PUT_LINE('No hay alquileres para ese vehículo.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Número de alquileres para la matrícula 3001NDR: ' || v_num_alquileres);
    END IF;

    v_num_alquileres := contarAlquileresPorMatricula('5002XXX');

    IF v_num_alquileres = -1 THEN
        DBMS_OUTPUT.PUT_LINE('El coche no existe.');
    ELSIF v_num_alquileres = 0 THEN
        DBMS_OUTPUT.PUT_LINE('No hay alquileres para ese vehículo.');
    ELSE
        DBMS_OUTPUT.PUT_LINE('Número de alquileres para la matrícula 5002XXX: ' || v_num_alquileres);
    END IF;
END;
/

-- C)

CREATE OR REPLACE PROCEDURE mostrarAlquileresPorModelo(p_nomModelo IN VARCHAR2) AS
BEGIN
    DECLARE
        v_modelo_exist NUMBER;
        excepNoExiste EXCEPTION;
    BEGIN
        SELECT COUNT(*)
        INTO v_modelo_exist
        FROM MODELO
        WHERE nomModelo = p_nomModelo;

        IF v_modelo_exist = 0 THEN
            RAISE excepNoExiste;
            RETURN;
        END IF;
    EXCEPTION
        WHEN excepNoExiste THEN
            DBMS_OUTPUT.PUT_LINE('El modelo especificado no existe.');
            RETURN;
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('Error al verificar la existencia del modelo: ' || SQLCODE);
            RETURN;
    END;

    DECLARE
        v_num_alquileres NUMBER;
        excepNoAlquiler EXCEPTION;
    BEGIN
        SELECT COUNT(*)
        INTO v_num_alquileres
        FROM ALQUILER A
        JOIN COCHE C ON A.idCoche = C.idCoche
        JOIN MODELO M ON C.idModelo = M.idModelo
        WHERE M.nomModelo = p_nomModelo;

        IF v_num_alquileres = 0 THEN
            RAISE excepNoAlquiler;
            RETURN;
        ELSE
            DBMS_OUTPUT.PUT_LINE('Alquileres para el modelo ' || p_nomModelo || ':');
            FOR alquiler IN (
                SELECT A.*, c.matricula
                FROM ALQUILER A
                JOIN COCHE C ON A.idCoche = C.idCoche
                JOIN MODELO M ON C.idModelo = M.idModelo
                WHERE M.nomModelo = p_nomModelo
            ) LOOP
                DBMS_OUTPUT.PUT_LINE('ID Alquiler: ' || alquiler.idAlquiler || ', Fecha Inicio: ' || alquiler.fechIni || ', Fecha Fin: ' || alquiler.fechFin || ', Precio: ' || alquiler.precio || ', Matrícula: ' || alquiler.matricula);
            END LOOP;
        END IF;
    EXCEPTION
        WHEN excepNoAlquiler THEN
            DBMS_OUTPUT.PUT_LINE('No hay alquileres para el modelo especificado.');
            RETURN;
        WHEN OTHERS THEN
            DBMS_OUTPUT.PUT_LINE('Error al mostrar los alquileres del modelo: ' || SQLCODE);
            RETURN;
    END;
END;
/

-- D)

EXEC mostrarAlquileresPorModelo('Clio');

-- E)

EXEC mostrarAlquileresPorModelo('Arkana');
EXEC mostrarAlquileresPorModelo('Otro');

-- 2
-- A)

CREATE OR REPLACE TYPE tObjMarca AS OBJECT(
    idMarca NUMBER,
    nomMarca VARCHAR2(20)
);

-- B)

CREATE OR REPLACE TYPE tObjModelo AS OBJECT(
    idModelo NUMBER,
    nomModelo VARCHAR2(20),
    anoMod NUMBER,
    marca REF tObjMarca
);

-- C) 1

CREATE OR REPLACE TYPE tObjCoche AS OBJECT(
    idCoche NUMBER,
    matricula VARCHAR2(7),
    color VARCHAR2(15),
    kms NUMBER,
    fechaCompra DATE,
    modelo REF tObjModelo
);

-- C) 2

CREATE OR REPLACE TYPE tObjCoche AS OBJECT(
    idCoche NUMBER,
    matricula VARCHAR2(7),
    color VARCHAR2(15),
    kms NUMBER,
    fechaCompra DATE,
    modelo REF tObjModelo,
    CONSTRUCTOR FUNCTION tObjCoche (idCoche NUMBER, matricula VARCHAR2, modelo REF tObjModelo)
    RETURN SELF AS RESULT
);

-- C) 3

CREATE OR REPLACE TYPE tObjCoche AS OBJECT(
    idCoche NUMBER,
    matricula VARCHAR2(7),
    color VARCHAR2(15),
    kms NUMBER,
    fechaCompra DATE,
    modelo REF tObjModelo,
    CONSTRUCTOR FUNCTION tObjCoche (idCoche NUMBER, matricula VARCHAR2, modelo REF tObjModelo) RETURN SELF AS RESULT,
    MAP MEMBER FUNCTION ordenMatricula RETURN VARCHAR2
);

-- C) 4

CREATE OR REPLACE TYPE tObjCoche AS OBJECT(
    idCoche NUMBER,
    matricula VARCHAR2(7),
    color VARCHAR2(15),
    kms NUMBER,
    fechaCompra DATE,
    modelo REF tObjModelo,
    CONSTRUCTOR FUNCTION tObjCoche (idCoche NUMBER, matricula VARCHAR2, modelo REF tObjModelo) RETURN SELF AS RESULT,
    MAP MEMBER FUNCTION ordenMatricula RETURN VARCHAR2,
    MEMBER PROCEDURE getCoche 
);

-- D)

CREATE OR REPLACE TYPE BODY tObjCoche AS
CONSTRUCTOR FUNCTION tObjCoche (idCoche NUMBER, matricula VARCHAR2, modelo REF tObjModelo)
    RETURN SELF AS RESULT IS
BEGIN 
    SELF.idCoche := idCoche;
    SELF.matricula := matricula;
    color := 'Rojo';
    kms := 0;
    fechaCompra := '08/06/2023';
    SELF.modelo := modelo;
    RETURN;
END;
MAP MEMBER FUNCTION ordenMatricula RETURN VARCHAR2 IS
BEGIN
    RETURN (matricula);
END ordenMatricula;
MEMBER PROCEDURE getCoche IS
BEGIN
    DBMS_OUTPUT.PUT_LINE('ID: ' || SELF.idCoche);
    DBMS_OUTPUT.PUT_LINE('Matricula: ' || SELF.matricula);
    DBMS_OUTPUT.PUT_LINE('Color: ' || SELF.color);
    DBMS_OUTPUT.PUT_LINE('Kms: ' || SELF.kms);
    DBMS_OUTPUT.PUT_LINE('Fecha de compra: ' || SELF.fechaCompra);
END;
END;
/

-- E)

CREATE TABLE tMARCAS OF tObjMarca;
CREATE TABLE tMODELOS OF tObjModelo;
CREATE TABLE tCOCHES OF tObjCoche;

-- F)

INSERT INTO tMARCAS
VALUES (1, 'Audi');
INSERT INTO tMARCAS
VALUES (2, 'Renault');

INSERT INTO tMODELOS
VALUES (1, 'A7', 2015, (SELECT REF(M) FROM tMARCAS M WHERE idMarca = 1));
INSERT INTO tMODELOS
VALUES (2, 'Rafale', 2024, (SELECT REF(M) FROM tMARCAS M WHERE idMarca = 2));

INSERT INTO tCOCHES
VALUES (1, 'MRC1995', 'Negro', 4500, '13/08/2021', (SELECT REF(M) FROM tMODELOS M WHERE idModelo = 1));
INSERT INTO tCOCHES
VALUES (2, 'JMN6664', 'Blanco', 1500, '21/04/2017', (SELECT REF(M) FROM tMODELOS M WHERE idModelo = 2));


SELECT * FROM tMARCAS;

SELECT * FROM tMODELOS;

SELECT * FROM tCOCHES;