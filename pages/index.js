import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

import React, { useState, useEffect } from "react";

import sub_nav from '../styles/SubNav.module.css';

import home_styles from '../styles/Home.module.css';

import PaintIcon from '../public/svg/paintbrush-pencil.svg';
import FileSolid from '../public/svg/file-solid.svg';
import AngleRight from '../public/svg/angle-double-right.svg';

export default function Home() {

	return (
		<>
			<Head>
				<title>Waste Management Plans in Cebu</title>
			</Head>
			<div className={home_styles.container}>
				<div className={home_styles.title}>
					<h1>WASTE MANAGMENT PLANS IN CEBU</h1>
				</div>
				<div className={home_styles.intro}>
					<p>Ang pinagtutuunan natin ay ang mga itinapon na semento sa Naga City. Ang itinapon na semento ay isang basurang produkto ng semento na sira, deformed, at hindi kanais-nais, kung hindi pansinan ay magtambak at lilikha ng espasyong puno ng basura.</p>
					<p>Ang dahilan kung bakit maraming itinapon na semento ay dahil sa masamang pag-iimbak at paggamit  ng materyal na ito. Ang pagkasira ng mga gusali ay lumilikha din ng mga itinapon na semento.</p>
					<p>Recycled Concrete Aggregate (RCA) tinatawag din na "crushed concrete" ay binubuo ng mga labi ng aspalto mula sa iba pang mga proyekto sa pagtatayo.</p>
				</div>
				<div className={home_styles.reference}>
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
									<AngleRight/>
									<span className={sub_nav.link_text}>AAPP5 G3 WEBSITE</span>
								</a>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
				
			</div>
		</>
	);
}
