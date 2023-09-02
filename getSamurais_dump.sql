--
-- PostgreSQL database dump
--

-- Dumped from database version 15.3
-- Dumped by pg_dump version 15.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: azzurah
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO azzurah;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: addresses; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.addresses (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    cep character varying(8) NOT NULL,
    city character varying(32) NOT NULL,
    street character varying(64) NOT NULL,
    "lotNumber" integer,
    complement character varying(255),
    neighborhood character varying(32) NOT NULL,
    "federalUnit" character varying(32) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.addresses OWNER TO azzurah;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.categories (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    category character varying(32) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.categories OWNER TO azzurah;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.comments (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "feedbackId" uuid NOT NULL,
    "userId" uuid NOT NULL,
    comment character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.comments OWNER TO azzurah;

--
-- Name: feedbacks; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.feedbacks (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "serviceId" uuid NOT NULL,
    "userId" uuid NOT NULL,
    feedback character varying(255),
    stars integer,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.feedbacks OWNER TO azzurah;

--
-- Name: phones; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.phones (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "phoneNumber" character varying(11) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.phones OWNER TO azzurah;

--
-- Name: servicePhotos; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public."servicePhotos" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "serviceId" uuid NOT NULL,
    url character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public."servicePhotos" OWNER TO azzurah;

--
-- Name: services; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.services (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "userId" uuid NOT NULL,
    "mainPhoto" uuid,
    service character varying(32) NOT NULL,
    "serviceDescription" character varying(255) NOT NULL,
    price integer NOT NULL,
    "paymentDescription" character varying(255) DEFAULT 'A conversar...'::character varying,
    status boolean DEFAULT true NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.services OWNER TO azzurah;

--
-- Name: servicesCategories; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public."servicesCategories" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "categoryId" uuid NOT NULL,
    "serviceId" uuid NOT NULL
);


ALTER TABLE public."servicesCategories" OWNER TO azzurah;

--
-- Name: users; Type: TABLE; Schema: public; Owner: azzurah
--

CREATE TABLE public.users (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    name character varying(64) NOT NULL,
    nick character varying(16) NOT NULL,
    email character varying(64) NOT NULL,
    password character varying(255) NOT NULL,
    birthday date NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO azzurah;

--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.addresses (id, "userId", cep, city, street, "lotNumber", complement, neighborhood, "federalUnit", "createdAt") FROM stdin;
59e3283e-33e9-4e1f-8041-dd1055d22f9c	50632dd0-3013-4131-97c2-fe40efa2a79a	12345678	Cidade Exemplo	Rua Principal	456	Apto 789	Centro	Estado A	2023-08-18 15:55:40.932499
0c5a0426-a4ce-4d6a-a631-18dc96bb050f	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	87654321	Outra Cidade	Avenida Elm	\N	\N	Bairro	Estado B	2023-08-18 15:55:40.932499
ced57882-0ffd-4ef6-a6e8-706d5b928a6c	b2289d0e-394b-42a2-9689-edbeb8742dca	54321678	Vilarejo	Rua Carvalho	101	Unidade 202	Residencial	Estado C	2023-08-18 15:55:40.932499
2b90abee-9f62-4dd4-b976-b1a59075033c	08c6f12b-36f9-4d5f-8674-586fbc4604d3	24210330	Niterói	Rua Edmundo March	321	Estrada para Aïnouz	Boa Viagem	RJ	2023-08-18 16:07:46.414706
efb7dc15-5847-4053-a682-2c7a84169f2e	0bdd469f-ce45-43da-b759-78e6bccbdad8	27283526	Volta Redonda	Avenida Sávio Cota de Almeida Gama	95	final da chácara!	Niterói	RJ	2023-08-18 16:51:54.712527
d9d7ef75-381a-4bf1-9212-fbbd23abddd3	052c38ec-e851-4a61-a391-60d5afeb7d84	18116901	Votorantim	Avenida Adolpho Massaglia	200	s/c	Vossoroca	SP	2023-08-18 21:09:08.605476
429f2952-f413-4a77-b40b-09b323939de0	0aaec1e0-59a1-422f-a69b-f61c08afe03d	18116901	Votorantim	Avenida Adolpho Massaglia	500	s/c	Vossoroca	SP	2023-08-18 21:19:16.457204
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.categories (id, category, "createdAt") FROM stdin;
400b036d-8593-4400-83ee-849723f04215	Assistencia técnica	2023-08-13 21:32:55.336357
fea5b6dc-a074-4fec-b687-2d850195881e	Aulas	2023-08-13 21:32:55.336357
ae1949d5-f48e-43fd-82ce-1bac87ad493b	Automóveis	2023-08-13 21:34:46.748333
cd3b38b1-c9dc-44cc-a61c-77395c8edfeb	Consultoria	2023-08-13 21:34:46.748333
77183d69-ef69-4cd5-9474-1454c2d2959d	Design e Tecnologia	2023-08-13 21:34:46.748333
178b535b-d1fa-4608-8f63-fd68440edcbe	Eventos	2023-08-13 21:34:46.748333
6147c3e0-ca28-4ffc-81da-7e4e6c5750b7	Moda e Beleza	2023-08-13 21:34:46.748333
b0aae63e-789e-4887-b462-e2fe40383218	Reformas e Reparos	2023-08-13 21:34:46.748333
140c041c-be21-498c-9c85-fded679c32e7	Saúde	2023-08-13 21:34:46.748333
8abf48b6-02e0-4192-b90f-9377f22170d5	Serviços domésticos	2023-08-13 21:34:46.748333
4cb3f52f-cfea-4345-9922-2c02a2da7031	Categoria	2023-08-13 23:54:30.345286
\.


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.comments (id, "feedbackId", "userId", comment, "createdAt") FROM stdin;
\.


--
-- Data for Name: feedbacks; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.feedbacks (id, "serviceId", "userId", feedback, stars, "createdAt") FROM stdin;
\.


--
-- Data for Name: phones; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.phones (id, "userId", "phoneNumber", "createdAt") FROM stdin;
f7e40bdd-fb09-4626-8406-7865b783e478	50632dd0-3013-4131-97c2-fe40efa2a79a	12345678901	2023-08-18 15:57:42.894488
d15bb848-525b-48e2-a56e-c53d44031775	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	98765432109	2023-08-18 15:57:42.894488
461b4803-6499-4d8b-a028-666adc2400ba	b2289d0e-394b-42a2-9689-edbeb8742dca	55544433322	2023-08-18 15:57:42.894488
c740f58f-172e-4b07-97d7-e30f94bfebd8	08c6f12b-36f9-4d5f-8674-586fbc4604d3	2430270066	2023-08-18 16:07:46.450719
75a8b9c6-7253-4ecd-925d-18b4cf913682	0bdd469f-ce45-43da-b759-78e6bccbdad8	24999780040	2023-08-18 16:51:54.745924
f9e31688-3d36-4bc0-8561-2b45ca509c26	052c38ec-e851-4a61-a391-60d5afeb7d84	11941068017	2023-08-18 21:09:08.641199
75373706-d67d-4e2d-8bb0-dde74e65dbff	0aaec1e0-59a1-422f-a69b-f61c08afe03d	00000000000	2023-08-18 21:19:16.492574
\.


--
-- Data for Name: servicePhotos; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public."servicePhotos" (id, "serviceId", url, "createdAt") FROM stdin;
\.


--
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.services (id, "userId", "mainPhoto", service, "serviceDescription", price, "paymentDescription", status, "createdAt") FROM stdin;
f740d5f5-dc13-4a1c-9ffb-b71902f0dcc0	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Manutenção de Celulares	Reparos e consertos em smartphones	80	Aceita cartão e transferência	t	2023-08-18 16:22:59.581607
ce162d8a-9bea-48f9-8521-43ce70a889ce	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de Matemática	Aulas particulares de matemática	60	Pagamento por aula	t	2023-08-18 16:22:59.581607
e03ccded-66aa-4489-910e-4de94849c8cd	b2289d0e-394b-42a2-9689-edbeb8742dca	\N	Consultoria Automotiva	Orientação sobre manutenção de carros	100	Pagamento na finalização	t	2023-08-18 16:22:59.581607
a8d2de05-40e5-481d-a849-bc64caa28799	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Design de Logotipos	Criação de logotipos para empresas	150	Parcelamento disponível	t	2023-08-18 16:22:59.581607
07edb258-a985-4952-ba05-be88f7915644	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de Inglês	Ensino personalizado da língua inglesa	70	Pagamento antecipado	t	2023-08-18 16:22:59.581607
5059e70b-d3d9-42ca-a51d-245aabfd2a58	b2289d0e-394b-42a2-9689-edbeb8742dca	\N	Reparos em Carroceria	Conserto de amassados e pintura	120	A combinar com o cliente	t	2023-08-18 16:22:59.581607
58477abc-4f16-4cbf-bd08-4cecb13ff6cc	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Desenvolvimento Web	Criação de sites e aplicações web	200	Pagamento por etapa	t	2023-08-18 16:22:59.581607
c9a350d5-47ae-4d31-b2f7-0192035b3017	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de Música	Aprendizado de instrumentos musicais	90	Pagamento mensal	t	2023-08-18 16:22:59.581607
fe9d00b7-ae79-4471-a50d-94fd38cb471d	b2289d0e-394b-42a2-9689-edbeb8742dca	\N	Manutenção de Máquinas	Reparos em equipamentos industriais	130	Aceita contrato anual	t	2023-08-18 16:22:59.581607
7832b270-2ebb-4f0a-a83b-bed2e14b3002	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Fotografia de Eventos	Cobertura fotográfica para festas	180	Pagamento após entrega das fotos	t	2023-08-18 16:22:59.581607
859a5352-8976-44b2-8357-a7b1260f2b10	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de História	Aulas particulares sobre história mundial	50	Desconto para pacotes	t	2023-08-18 16:22:59.581607
7959ddcb-4e4a-4424-9bc0-de9b22bb4208	b2289d0e-394b-42a2-9689-edbeb8742dca	\N	Consultoria de Finanças	Assessoria financeira pessoal	90	Consulta inicial gratuita	t	2023-08-18 16:22:59.581607
bb9f3edd-a5cd-4225-91cb-66ece8b47430	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Decoração de Interiores	Projetos de decoração para residências	160	Parcelamento em até 3 vezes	t	2023-08-18 16:22:59.581607
c328c72f-47f1-4c7b-8198-611fe6c32e92	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de Yoga	Instruções de práticas de yoga	40	Pagamento por aula avulsa	t	2023-08-18 16:22:59.581607
af25afbf-061b-4bb5-b07c-ff5a7df60346	b2289d0e-394b-42a2-9689-edbeb8742dca	\N	Instalação Elétrica	Serviços de instalação elétrica	110	Pagamento após aprovação do serviço	t	2023-08-18 16:22:59.581607
122f67e2-d514-407b-9d98-5921b8d3e40f	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Criação de Vídeos	Edição e produção de vídeos diversos	70	Orçamento personalizado	t	2023-08-18 16:22:59.581607
90104945-07b2-4dd4-81ee-430472e3e12c	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de Dança	Instruções de diferentes estilos de dança	55	Pagamento por mês	t	2023-08-18 16:22:59.581607
e5638977-10bf-4635-bd6d-ef41c17a1034	b2289d0e-394b-42a2-9689-edbeb8742dca	\N	Reparos em Telhados	Consertos e manutenção em coberturas	130	A combinar com o cliente	t	2023-08-18 16:22:59.581607
132e707a-690f-4066-aa46-10929f5b1ff8	50632dd0-3013-4131-97c2-fe40efa2a79a	\N	Serviços de Limpeza	Faxina e limpeza geral	50	Pagamento por hora	t	2023-08-18 16:22:59.581607
aa3d2928-64b4-4b37-a0f4-54babc8b480b	d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	\N	Aulas de Programação	Ensino de linguagens de programação	75	Desconto para pacotes	t	2023-08-18 16:22:59.581607
021fff8b-c636-41f7-b9ac-d8fee77a96e8	08c6f12b-36f9-4d5f-8674-586fbc4604d3	\N	test	asdfas	2345	\N	t	2023-08-18 16:23:51.887346
d641459e-0e66-4be4-940c-c9570e4d6b4d	052c38ec-e851-4a61-a391-60d5afeb7d84	\N	Programador	Faço seu site em um dia.	1500	PIX	t	2023-08-18 21:11:26.924407
\.


--
-- Data for Name: servicesCategories; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public."servicesCategories" (id, "categoryId", "serviceId") FROM stdin;
0582fdd3-802f-4eb4-9d39-59c4096a6b05	77183d69-ef69-4cd5-9474-1454c2d2959d	a8d2de05-40e5-481d-a849-bc64caa28799
20c4a8f3-755c-40d3-b9f6-256b6a109919	77183d69-ef69-4cd5-9474-1454c2d2959d	58477abc-4f16-4cbf-bd08-4cecb13ff6cc
bec40c7e-552b-4621-8198-8269e91be01e	b0aae63e-789e-4887-b462-e2fe40383218	5059e70b-d3d9-42ca-a51d-245aabfd2a58
890b5a8a-b5fa-4b2c-b542-c8c2c3e8e191	b0aae63e-789e-4887-b462-e2fe40383218	fe9d00b7-ae79-4471-a50d-94fd38cb471d
9449a341-14b9-48a9-8abe-fa782b4a2db1	b0aae63e-789e-4887-b462-e2fe40383218	bb9f3edd-a5cd-4225-91cb-66ece8b47430
495c72f8-6a91-4f5b-a838-ca0693fec6fd	b0aae63e-789e-4887-b462-e2fe40383218	af25afbf-061b-4bb5-b07c-ff5a7df60346
0829ff4b-bb42-4a24-ad9c-5547e5d68da7	b0aae63e-789e-4887-b462-e2fe40383218	e5638977-10bf-4635-bd6d-ef41c17a1034
b8c41404-b355-4ca0-8162-91248d037fba	fea5b6dc-a074-4fec-b687-2d850195881e	c9a350d5-47ae-4d31-b2f7-0192035b3017
ca6e1f1e-7860-4fed-95f0-bda676d0bcf9	fea5b6dc-a074-4fec-b687-2d850195881e	859a5352-8976-44b2-8357-a7b1260f2b10
5f469ee1-3ad4-4884-b980-7d09599e1577	fea5b6dc-a074-4fec-b687-2d850195881e	c328c72f-47f1-4c7b-8198-611fe6c32e92
3851b2c2-5bf2-478a-9d9b-bc964a5a6dc6	fea5b6dc-a074-4fec-b687-2d850195881e	90104945-07b2-4dd4-81ee-430472e3e12c
f90965a8-ec0a-46b8-8c05-3b474636ce38	fea5b6dc-a074-4fec-b687-2d850195881e	aa3d2928-64b4-4b37-a0f4-54babc8b480b
7ebb2af7-28dc-46f3-9129-ea983d828a67	178b535b-d1fa-4608-8f63-fd68440edcbe	7832b270-2ebb-4f0a-a83b-bed2e14b3002
8aa06e10-5d2c-40be-8aaa-b5a0b6d422b7	cd3b38b1-c9dc-44cc-a61c-77395c8edfeb	7959ddcb-4e4a-4424-9bc0-de9b22bb4208
ca9ad6ae-3141-4f02-ad5a-9613beb20774	77183d69-ef69-4cd5-9474-1454c2d2959d	122f67e2-d514-407b-9d98-5921b8d3e40f
739618aa-1a52-4fa8-a625-b87234ec58ff	8abf48b6-02e0-4192-b90f-9377f22170d5	132e707a-690f-4066-aa46-10929f5b1ff8
3c3b194d-fdc0-4baf-a5fa-9c0a726829d0	4cb3f52f-cfea-4345-9922-2c02a2da7031	021fff8b-c636-41f7-b9ac-d8fee77a96e8
352abb82-6d7e-4265-834b-dedca145609e	77183d69-ef69-4cd5-9474-1454c2d2959d	d641459e-0e66-4be4-940c-c9570e4d6b4d
29e1df1b-7173-4579-b974-1ca954a9c0ef	400b036d-8593-4400-83ee-849723f04215	f740d5f5-dc13-4a1c-9ffb-b71902f0dcc0
7d61c294-ba7b-410f-b273-45c8672b9675	fea5b6dc-a074-4fec-b687-2d850195881e	ce162d8a-9bea-48f9-8521-43ce70a889ce
b18c2606-91f6-4d55-a399-891b8fd2bea9	ae1949d5-f48e-43fd-82ce-1bac87ad493b	e03ccded-66aa-4489-910e-4de94849c8cd
59efeeab-438d-4349-82f6-12eb72a4e312	fea5b6dc-a074-4fec-b687-2d850195881e	07edb258-a985-4952-ba05-be88f7915644
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: azzurah
--

COPY public.users (id, name, nick, email, password, birthday, "createdAt") FROM stdin;
50632dd0-3013-4131-97c2-fe40efa2a79a	Ana Silva	anas	ana@example.com	senha_criptografada_123	1992-07-18	2023-08-18 15:53:18.959487
d5f90c03-00a8-4ddc-a8a0-36aa2b5ddbcf	Carlos Santos	carlos	carlos@example.com	senha_criptografada_456	1988-03-05	2023-08-18 15:53:18.959487
b2289d0e-394b-42a2-9689-edbeb8742dca	Mariana Almeida	mariana	mariana@example.com	senha_criptografada_789	1995-11-30	2023-08-18 15:53:18.959487
08c6f12b-36f9-4d5f-8674-586fbc4604d3	Don L	DonL	donl@mail.com	$2b$10$5uKBSboFAuKyYI8e0c1lJOB.kPO25Bcal9KQVL9drKKx9QsS1Ye8e	1999-01-01	2023-08-18 16:07:46.378894
0bdd469f-ce45-43da-b759-78e6bccbdad8	Tiago Sindra Sad	Tiago	test@mail.com	$2b$10$9W.gl6USG22s5wy/OAAPuOaklLRHM.3LfzdVqRqw69cHq5SmPpQOK	1997-02-08	2023-08-18 16:51:54.679208
052c38ec-e851-4a61-a391-60d5afeb7d84	Gustavo Barbosa Santos	Guga	guga@driven.com	$2b$10$JhvMhPXDtOIW55Zd0W4O8ePWwM9363X2YnSP69fOhjHks/yX5OxYm	2000-01-17	2023-08-18 21:09:08.570278
0aaec1e0-59a1-422f-a69b-f61c08afe03d	Roberto	Robs	robs@driven.com	$2b$10$hVlBbkTtauFkf7BRS4D9KOO/U9.w9d1Tm6yj6Do5H6NhVdCw026FS	2000-01-17	2023-08-18 21:19:16.418023
\.


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (id);


--
-- Name: categories categories_category_key; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_category_key UNIQUE (category);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: feedbacks feedbacks_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT feedbacks_pkey PRIMARY KEY (id);


--
-- Name: phones phones_phoneNumber_key; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT "phones_phoneNumber_key" UNIQUE ("phoneNumber");


--
-- Name: phones phones_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT phones_pkey PRIMARY KEY (id);


--
-- Name: servicePhotos servicePhotos_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public."servicePhotos"
    ADD CONSTRAINT "servicePhotos_pkey" PRIMARY KEY (id);


--
-- Name: servicesCategories servicesCategories_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public."servicesCategories"
    ADD CONSTRAINT "servicesCategories_pkey" PRIMARY KEY (id);


--
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: addresses addresses_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT "addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: comments comments_feedbackId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES public.feedbacks(id);


--
-- Name: comments comments_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: feedbacks feedbacks_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT "feedbacks_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id);


--
-- Name: feedbacks feedbacks_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.feedbacks
    ADD CONSTRAINT "feedbacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: phones phones_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.phones
    ADD CONSTRAINT "phones_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: servicePhotos servicePhotos_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public."servicePhotos"
    ADD CONSTRAINT "servicePhotos_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id);


--
-- Name: servicesCategories servicesCategories_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public."servicesCategories"
    ADD CONSTRAINT "servicesCategories_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id);


--
-- Name: servicesCategories servicesCategories_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public."servicesCategories"
    ADD CONSTRAINT "servicesCategories_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id);


--
-- Name: services services_mainPhoto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT "services_mainPhoto_fkey" FOREIGN KEY ("mainPhoto") REFERENCES public."servicePhotos"(id);


--
-- Name: services services_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: azzurah
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT "services_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: DEFAULT PRIVILEGES FOR SEQUENCES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON SEQUENCES  TO azzurah;


--
-- Name: DEFAULT PRIVILEGES FOR TYPES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TYPES  TO azzurah;


--
-- Name: DEFAULT PRIVILEGES FOR FUNCTIONS; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON FUNCTIONS  TO azzurah;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: -; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres GRANT ALL ON TABLES  TO azzurah;


--
-- PostgreSQL database dump complete
--

