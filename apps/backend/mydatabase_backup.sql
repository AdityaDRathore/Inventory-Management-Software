--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2 (Debian 17.2-1.pgdg120+1)
-- Dumped by pg_dump version 17.2 (Ubuntu 17.2-1.pgdg20.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: myuser
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO myuser;

--
-- Name: ReportType; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."ReportType" AS ENUM (
    'sales',
    'purchases'
);


ALTER TYPE public."ReportType" OWNER TO myuser;

--
-- Name: Role; Type: TYPE; Schema: public; Owner: myuser
--

CREATE TYPE public."Role" AS ENUM (
    'admin',
    'shopkeeper'
);


ALTER TYPE public."Role" OWNER TO myuser;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Customer; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Customer" (
    customer_id text NOT NULL,
    user_id text NOT NULL,
    name text NOT NULL,
    phone_number text,
    email text,
    address text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Customer" OWNER TO myuser;

--
-- Name: Product; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Product" (
    product_id text NOT NULL,
    user_id text NOT NULL,
    name text NOT NULL,
    category text,
    stock_quantity integer DEFAULT 0 NOT NULL,
    price_per_unit double precision NOT NULL,
    wholesaler_id text NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at timestamp(3) without time zone NOT NULL
);


ALTER TABLE public."Product" OWNER TO myuser;

--
-- Name: Purchase; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Purchase" (
    purchase_id text NOT NULL,
    user_id text NOT NULL,
    wholesaler_id text NOT NULL,
    product_id text NOT NULL,
    quantity integer NOT NULL,
    total_price double precision NOT NULL,
    purchase_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Purchase" OWNER TO myuser;

--
-- Name: Report; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Report" (
    report_id text NOT NULL,
    user_id text NOT NULL,
    report_type public."ReportType" NOT NULL,
    generated_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    file_url text NOT NULL
);


ALTER TABLE public."Report" OWNER TO myuser;

--
-- Name: Sale; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Sale" (
    sale_id text NOT NULL,
    user_id text NOT NULL,
    customer_id text NOT NULL,
    product_id text NOT NULL,
    quantity integer NOT NULL,
    total_price double precision NOT NULL,
    sale_date timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Sale" OWNER TO myuser;

--
-- Name: User; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."User" (
    user_id text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role public."Role" DEFAULT 'shopkeeper'::public."Role" NOT NULL,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."User" OWNER TO myuser;

--
-- Name: Wholesaler; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public."Wholesaler" (
    wholesaler_id text NOT NULL,
    user_id text NOT NULL,
    name text NOT NULL,
    phone_number text,
    email text,
    address text,
    created_at timestamp(3) without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public."Wholesaler" OWNER TO myuser;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO myuser;

--
-- Data for Name: Customer; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Customer" (customer_id, user_id, name, phone_number, email, address, created_at) FROM stdin;
\.


--
-- Data for Name: Product; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Product" (product_id, user_id, name, category, stock_quantity, price_per_unit, wholesaler_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: Purchase; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Purchase" (purchase_id, user_id, wholesaler_id, product_id, quantity, total_price, purchase_date) FROM stdin;
\.


--
-- Data for Name: Report; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Report" (report_id, user_id, report_type, generated_at, file_url) FROM stdin;
\.


--
-- Data for Name: Sale; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Sale" (sale_id, user_id, customer_id, product_id, quantity, total_price, sale_date) FROM stdin;
\.


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."User" (user_id, name, email, password, role, created_at) FROM stdin;
4b6f8e2e-ff1f-4d45-9d6e-9338c1817400	John Doe	john.new@example.com	$2b$10$4LtN1ZVdAnKU/.SKmDe3XejzjL8V83VOFmIURLvUMkRdWX/xy5MOm	shopkeeper	2025-01-08 14:57:22.723
\.


--
-- Data for Name: Wholesaler; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public."Wholesaler" (wholesaler_id, user_id, name, phone_number, email, address, created_at) FROM stdin;
6f9500c3-10e9-44db-b7cd-5828f930cc2a	4b6f8e2e-ff1f-4d45-9d6e-9338c1817400	Wholesaler A	09873654321	wholesaler@example.com	123 Main St	2025-01-08 15:05:44.583
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
87260122-7f99-45ff-8655-c2504884c3ca	ac5709549e13a3477965b23877054918689c910665b5f795523e8df077742f94	2025-01-08 14:54:21.097878+00	20241223111519_init	\N	\N	2025-01-08 14:54:21.077895+00	1
\.


--
-- Name: Customer Customer_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Customer"
    ADD CONSTRAINT "Customer_pkey" PRIMARY KEY (customer_id);


--
-- Name: Product Product_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_pkey" PRIMARY KEY (product_id);


--
-- Name: Purchase Purchase_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Purchase"
    ADD CONSTRAINT "Purchase_pkey" PRIMARY KEY (purchase_id);


--
-- Name: Report Report_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Report"
    ADD CONSTRAINT "Report_pkey" PRIMARY KEY (report_id);


--
-- Name: Sale Sale_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Sale"
    ADD CONSTRAINT "Sale_pkey" PRIMARY KEY (sale_id);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (user_id);


--
-- Name: Wholesaler Wholesaler_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Wholesaler"
    ADD CONSTRAINT "Wholesaler_pkey" PRIMARY KEY (wholesaler_id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Customer_phone_number_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "Customer_phone_number_key" ON public."Customer" USING btree (phone_number);


--
-- Name: User_email_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email);


--
-- Name: Wholesaler_phone_number_key; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX "Wholesaler_phone_number_key" ON public."Wholesaler" USING btree (phone_number);


--
-- Name: Customer Customer_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Customer"
    ADD CONSTRAINT "Customer_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Product Product_wholesaler_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Product"
    ADD CONSTRAINT "Product_wholesaler_id_fkey" FOREIGN KEY (wholesaler_id) REFERENCES public."Wholesaler"(wholesaler_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Purchase Purchase_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Purchase"
    ADD CONSTRAINT "Purchase_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public."Product"(product_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Purchase Purchase_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Purchase"
    ADD CONSTRAINT "Purchase_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Purchase Purchase_wholesaler_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Purchase"
    ADD CONSTRAINT "Purchase_wholesaler_id_fkey" FOREIGN KEY (wholesaler_id) REFERENCES public."Wholesaler"(wholesaler_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Report Report_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Report"
    ADD CONSTRAINT "Report_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Sale Sale_customer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Sale"
    ADD CONSTRAINT "Sale_customer_id_fkey" FOREIGN KEY (customer_id) REFERENCES public."Customer"(customer_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Sale Sale_product_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Sale"
    ADD CONSTRAINT "Sale_product_id_fkey" FOREIGN KEY (product_id) REFERENCES public."Product"(product_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Sale Sale_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Sale"
    ADD CONSTRAINT "Sale_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Wholesaler Wholesaler_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public."Wholesaler"
    ADD CONSTRAINT "Wholesaler_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(user_id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: DEFAULT PRIVILEGES FOR TABLES; Type: DEFAULT ACL; Schema: public; Owner: postgres
--

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public GRANT ALL ON TABLES TO myuser;


--
-- PostgreSQL database dump complete
--

