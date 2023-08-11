CREATE TABLE users (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	name VARCHAR(64) NOT NULL,
	nick VARCHAR(16) NOT NULL,
	email VARCHAR(64) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL,
	birthday DATE NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE addresses (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"userId" UUID NOT NULL REFERENCES users(id),
	cep VARCHAR(8) NOT NULL,
	city VARCHAR(32) NOT NULL,
	street VARCHAR(32) NOT NULL,
	lotNumber INT,
	complement VARCHAR(255),
	neighborhood VARCHAR(32) NOT NULL,
	"federalUnit" VARCHAR(32) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE phones (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"userId" UUID NOT NULL REFERENCES users(id),
	"phoneNumber" VARCHAR(11) NOT NULL UNIQUE,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE services (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"userId" UUID NOT NULL REFERENCES users(id),
	"mainPhoto" UUID,
	-- REFERENCES "servicePhotos"(id),
	"serviceName" VARCHAR(32) NOT NULL,
	"serviceDescription" VARCHAR(255) NOT NULL,
	price INTEGER NOT NULL,
	"paymentDescription" VARCHAR(255) DEFAULT 'A conversar...',
	"isActive" BOOLEAN DEFAULT true,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE categories (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	category VARCHAR(32) NOT NULL UNIQUE,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE "servicesCategories" (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"categoryId" UUID NOT NULL REFERENCES categories(id),
	"serviceId" UUID NOT NULL REFERENCES services(id)
);
CREATE TABLE "servicePhotos" (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"serviceId" UUID NOT NULL,
	-- REFERENCES services(id),
	url VARCHAR(255) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE feedbacks (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"serviceId" UUID NOT NULL REFERENCES services(id),
	"userId" UUID NOT NULL REFERENCES users(id),
	feedback VARCHAR(255),
	stars INTEGER,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
CREATE TABLE comments (
	id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
	"feedbackId" UUID NOT NULL REFERENCES "feedbacks"(id),
	"userId" UUID NOT NULL REFERENCES users(id),
	comment VARCHAR(255) NOT NULL,
	"createdAt" TIMESTAMP DEFAULT NOW()
);
ALTER TABLE "servicePhotos"
ADD FOREIGN KEY ("serviceId") REFERENCES services(id);
ALTER TABLE services
ADD FOREIGN KEY ("mainPhoto") REFERENCES "servicePhotos"(id);
