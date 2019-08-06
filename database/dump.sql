--
-- PostgreSQL database dump
--

-- Dumped from database version 11.2
-- Dumped by pg_dump version 11.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: geronimo
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO geronimo;

--
-- Name: Vehicles; Type: TABLE; Schema: public; Owner: geronimo
--

CREATE TABLE public."Vehicles" (
    id integer NOT NULL,
    type character varying(255),
    plate character varying(255),
    note text,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    status character varying(255)
);


ALTER TABLE public."Vehicles" OWNER TO geronimo;

--
-- Name: Vehicles_id_seq; Type: SEQUENCE; Schema: public; Owner: geronimo
--

CREATE SEQUENCE public."Vehicles_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Vehicles_id_seq" OWNER TO geronimo;

--
-- Name: Vehicles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: geronimo
--

ALTER SEQUENCE public."Vehicles_id_seq" OWNED BY public."Vehicles".id;


--
-- Name: Vehicles id; Type: DEFAULT; Schema: public; Owner: geronimo
--

ALTER TABLE ONLY public."Vehicles" ALTER COLUMN id SET DEFAULT nextval('public."Vehicles_id_seq"'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: geronimo
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190803000946-create-vehicle.js
20190804193814-add-status-to-vehicles.js
\.


--
-- Data for Name: Vehicles; Type: TABLE DATA; Schema: public; Owner: geronimo
--

COPY public."Vehicles" (id, type, plate, note, "createdAt", "updatedAt", status) FROM stdin;
97	Moto	ggg123	\N	2019-08-05 21:54:36.204-05	2019-08-06 09:40:14.255-05	outpay
98	Moto	adasdasd	\N	2019-08-06 06:27:16.651-05	2019-08-06 09:40:19.662-05	outpay
99	Car	GER123	\N	2019-08-06 06:30:22.444-05	2019-08-06 09:40:22.881-05	outpay
100	Moto	MOT123	\N	2019-08-06 06:31:01.142-05	2019-08-06 14:07:23.172-05	outpay
101	Moto		\N	2019-08-06 07:28:24.175-05	2019-08-06 14:13:20.375-05	outpay
102			\N	2019-08-06 07:32:13.749-05	2019-08-06 14:13:37.681-05	outpay
103	Car	123gggg	\N	2019-08-06 07:35:12.277-05	2019-08-06 14:16:19.386-05	outpay
104	Car	123123	\N	2019-08-06 07:43:44.059-05	2019-08-06 14:17:13.21-05	outpay
105	Moto	123rrr	\N	2019-08-06 07:44:18.462-05	2019-08-06 14:20:04.239-05	outpay
106	Moto	MGJ21C	\N	2019-08-06 07:46:17.137-05	2019-08-06 14:25:43.069-05	outpay
95	Moto	MGJ21c	\N	2019-08-05 21:53:52.034-05	2019-08-06 14:26:23.846-05	outpay
107	Car	JJJHHH0	\N	2019-08-06 14:26:39.839-05	2019-08-06 14:26:39.839-05	in
108	Moto	000tiii	\N	2019-08-06 14:26:50.231-05	2019-08-06 14:26:50.231-05	in
96	Car	Car123	\N	2019-08-05 21:54:07.411-05	2019-08-05 21:54:07.411-05	in
\.


--
-- Name: Vehicles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: geronimo
--

SELECT pg_catalog.setval('public."Vehicles_id_seq"', 108, true);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: geronimo
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: Vehicles Vehicles_pkey; Type: CONSTRAINT; Schema: public; Owner: geronimo
--

ALTER TABLE ONLY public."Vehicles"
    ADD CONSTRAINT "Vehicles_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

