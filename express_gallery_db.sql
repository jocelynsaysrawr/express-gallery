DROP DATABASE IF EXISTS express_gallery_db;
DROP USER IF EXISTS express_gallery_user;
CREATE USER express_gallery_user WITH ENCRYPTED PASSWORD 'password';
CREATE DATABASE express_gallery_db OWNER express_gallery_user;
\c express_gallery_db;
SET ROLE express_gallery_user;