import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

import React, { useState, useEffect } from "react";

import sub_nav from '../styles/SubNav.module.css';

import PaintIcon from '../public/svg/paintbrush-pencil.svg';
import FileSolid from '../public/svg/file-solid.svg';

export default function Home() {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			
			<h1> <b>Waste Management Plans in Cebu</b> </h1>
			<ul>
				<li>Waste Management Plan in Naga City: Discarded Cement</li>
				<ul>
					<li>Ang pinagtutuunan natin ay ang mga itinapon na semento sa Naga City. Ang itinapon na semento ay isang basurang produkto ng semento na sira, deformed, at hindi kanais-nais, kung hindi pansinan ay magtambak at lilikha ng espasyong puno ng basura.</li>
					<li>Ang dahilan kung bakit maraming itinapon na semento ay dahil sa masamang pag-iimbak at paggamit ng materyal na ito. Ang pagkasira ng mga gusali ay lumilikha din ng mga itinapon na semento.</li>
					<li>Recycled Concrete Aggregate (RCA) tinatawag din na "crushed concrete" ay binubuo ng mga labi ng aspalto mula sa iba pang mga proyekto sa pagtatayo.</li>
					<li>Ang pangunahing isyu sa pamamahala ng mga itinapon na semento ay maaari lamang itong i-recycle at hindi muling gamitin. Hindi na muling magagamit ang semento dahil isang beses lang magagamit ang proseso nito sa paggawa ng semento, hindi na muling magiging basang semento ang materyal at ngayon ay naging bato na. Kaya ang tanging paraan ay ang pag-recycle, gamitin ang durog na semento sa mas maliliit na bato o “crushed concrete”, ngunit ang pag-recycle ay ang semento ay hindi epektibo dahil ang durog na kongkreto ay may mas kaunting pangangailangan kumpara sa semento, ito ay hindi rin epektibo kaya ang pamamahala ng basura na ito ay nabawasan lamang ng 40 porsyento ang basura ng semento.</li>
				</ul>
			</ul>
			<nav className={sub_nav.subnav}>
				<ul className={sub_nav.subnav_nav}>
					<li className={sub_nav.nav_item}>
						<Link href="/infographic"><a className={sub_nav.nav_link}>
							<PaintIcon/>
							<span className={sub_nav.link_text}>Infographic</span>
						</a>
						</Link>
					</li>
					<li className={sub_nav.nav_item}>
						<Link href="/concept-paper"><a className={sub_nav.nav_link}>
							<FileSolid/>
							<span className={sub_nav.link_text}>Concept Paper</span>
						</a>
						</Link>
					</li>
					<li className={sub_nav.nav_item}>
						<Link href="https://sites.google.com/dbtc-cebu.edu.ph/aapp5-group-3-waste-management/home?pli=1&authuser=1"><a className={sub_nav.nav_link}>
							<FileSolid/>
							<span className={sub_nav.link_text}>AAPP5 G3 WEBSITE</span>
						</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}
