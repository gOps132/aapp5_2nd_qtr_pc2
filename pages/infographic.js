import Image from "next/image";
import Head from 'next/head';

import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';

import doc_styles from '../styles/Doc.module.css';

export default function Infographic() {

	return (
		<>
			<Head>
				<title>Infographic</title>
			</Head>
			<div className={doc_styles.document_container}>
				<div className={doc_styles.doc_shadow}>
					<Image
						src={"/doc/aapp5-infographic.png"}
						alt="group3 waste management infographic"
						width={800}
						height={2000}
					/>
				</div>
			</div>
		</>	
	);
}
