CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(32) NOT NULL,
	email VARCHAR(64) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE address (
	id SERIAL PRIMARY KEY,
	"idUser" INT REFERENCES users(id),
	cep VARCHAR(8) NOT NULL,
	city VARCHAR(32) NOT NULL,
	street VARCHAR(32) NOT NULL,
	lotNumber VARCHAR(16),
	complement VARCHAR(255),
	neighborhood VARCHAR(32) NOT NULL,
	"federalUnit" VARCHAR(32) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE phones (
	id SERIAL PRIMARY KEY,
	"userId" INTEGER REFERENCES users(id),
    "phoneNumber" INTEGER 
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE services (
	id SERIAL PRIMARY KEY,
	"userId" INTEGER REFERENCES users(id),
    "mainPhoto" INTEGER REFERENCES "servicePhotos"(id),
    "serviceName" VARCHAR(32) NOT NULL,
    "serviceDescription" VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL,
    "paymentDescription" VARCHAR(255) DEFAULT 'A conversar...',
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE categories (
	id SERIAL PRIMARY KEY,
    category VARCHAR(32) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE servicesCategories (
	id SERIAL PRIMARY KEY,
	"categoryId" INTEGER REFERENCES category(id),
	"serviceId" INTEGER REFERENCES services(id)
);

CREATE TABLE "servicePhotos" (
	id SERIAL PRIMARY KEY,
	"serviceId" INTEGER REFERENCES services(id),
    "photoUrl" VARCHAR(255) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE feedbacks (
	id SERIAL PRIMARY KEY,
	"serviceId" INTEGER REFERENCES services(id),
	"userId" INTEGER REFERENCES users(id),
    feedback VARCHAR(255) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE comments (
	id SERIAL PRIMARY KEY,
	"feedbackId" INTEGER REFERENCES "feedbacks"(id),
	"userId" INTEGER REFERENCES users(id),
    comment VARCHAR(255) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);