import Image from "next/image";
import Head from 'next/head';
import React, { useState, useEffect } from "react";

import debug_ from '../components/debug_helper';
import doc_styles from '../styles/Doc.module.css';

export default function ConceptPaperPage() {
	const src = "https://docs.google.com/document/d/e/2PACX-1vQhZdKO-vniegGHg7sTUhb1Tsxj2tJEzUvy4oQRziO16PMRKT0m0THMVbiheocM2h2S-whP1c7P-gfO/pub?embedded=true"
	return (
		<>
			<Head>
				<title>Concep Paper</title>
			</Head>
			<div className={doc_styles.document_container}>
				<iframe 
					src={src} 
					width="100%"
					height="600"
				>
				</iframe>
			</div>
		</>
	);
}
