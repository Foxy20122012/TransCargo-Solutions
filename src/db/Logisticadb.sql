CREATE TABLE reporte_viaje (
    id INT AUTO_INCREMENT PRIMARY KEY,
    piloto_asignado VARCHAR(255) NOT NULL,
    unidad_asignada VARCHAR(50) NOT NULL,
    hora_salida TIME NOT NULL,
    hora_llegada TIME NOT NULL,
    punto_salida VARCHAR(255) NOT NULL,
    odometro_salida FLOAT NOT NULL,
    fecha DATE NOT NULL,
    folio_interno VARCHAR(100) NOT NULL,
    destino VARCHAR(255) NOT NULL,
    odometro_llegada FLOAT NOT NULL,
    kilometros_ida FLOAT NOT NULL,
    kilometros_llegada FLOAT NOT NULL,
    descarga_pagada BOOLEAN NOT NULL,  -- Puede ser 1 (para pagado) o 0 (para no pagado)
    valor_viaje DECIMAL(10, 2) NOT NULL,  -- Cambiar el tamaño según la moneda y valor máximo
    factura VARCHAR(150)  -- Puede ser NULL si no siempre se proporciona
);
