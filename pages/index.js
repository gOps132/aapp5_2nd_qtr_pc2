import Image from "next/image";
import Head from 'next/head';
import Link from "next/link";

import React, { useState, useEffect } from "react";

import sub_nav from '../styles/SubNav.module.css';

import PaintIcon from '../public/svg/paintbrush-pencil.svg';
import FileSolid from '../public/svg/file-solid.svg';
import AngleRight from '../public/svg/angle-double-right.svg';

export default function Home() {

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>

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
		</>
	);
}
