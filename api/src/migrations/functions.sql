CREATE TABLE IF NOT EXISTS `nistfunctions` (
  functioncode nvarchar(10) NOT NULL PRIMARY KEY,
  functionname nvarchar(25) NOT NULL,
  sortOrder int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



INSERT INTO nistfunctions (functioncode, functionname, sortOrder)
VALUES ('ID', 'Identify',1);

INSERT INTO nistfunctions (functioncode, functionname, sortOrder)
VALUES ('PR', 'Protect', 2);