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
				<div>
					<p>Ang pangunahing isyu sa pamamahala ng mga itinapon na semento ay maaari lamang itong i-recycle at hindi muling gamitin. Hindi na muling magagamit ang semento dahil isang beses lang magagamit ang proseso nito sa paggawa ng semento, hindi na muling magiging basang semento ang materyal at ngayon ay naging bato na. Kaya ang tanging paraan ay ang pag-recycle, gamitin ang durog na semento sa mas maliliit na bato o “crushed concrete”, ngunit ang pag-recycle ay ang semento ay hindi epektibo dahil ang durog na kongkreto ay may mas kaunting pangangailangan kumpara sa semento, ito ay hindi rin epektibo kaya ang pamamahala ng basura na ito ay nabawasan lamang ng 40 porsyento ang basura ng semento.
					</p>
				</div>
				<div className={home_styles.section_two}>
					<h1>Pagtatanghal ng wika at kultura sa Lungsod ng Naga</h1>
				</div>
				<div className={home_styles.section_info}>
					<div className={home_styles.wika}>
						<h2>WIKA</h2>
						<p>Central Bikol Inagta Partido Tagalog</p>
					</div>
				</div>
				<div className={home_styles.section_info}>	
					<div className={home_styles.kultura}>
						<h2>KULTURA</h2>
						<p>Ang Penafrancia Festival, na nagpaparangal sa patroness ng rehiyon ng Bicol na si Nuestra Senora de Penfrancia, ay isang kultural na kaganapan na ginanap sa Naga City. Ang imahe ng Mahal na Birheng Maria ay dinadala mula sa kanyang dambana sa Peafrancia Basilica Minore hanggang Naga Metropolitan Cathedral sa panahon ng Traslacion procession sa ikalawang Biyernes ng Setyembre, na nagsisilbi ring simula ng sampung araw na kapistahan. Ang katedral ay nagho-host ng siyam na araw na nobena, at ang lungsod ay nag-obserba ng pagdiriwang na may mga parada at iba pang mga kaganapan. Ang larawan ay naibalik sa dambana nito sa ikatlong Sabado ng Setyembre sa pamamagitan ng isang fluvial procession na tumatawid sa Naga River. Ang mga misa ay ginaganap sa Basilica Minore sa araw ng kapistahan ng Our Lady of Peafrancia, na sa susunod na araw. Para sa pagdiriwang ng pagdiriwang na ito, maraming tao ang nagtitipon, kabilang ang mga taga-Naga gayundin ang mga peregrino at mananampalataya.</p>
					</div>
				</div>
				<div className={home_styles.section_list}>
					<h2>3 Mga Iminungkahing Paraan</h2>					
					<ul>
						<li>Gawing mas mababa ang itinapon na semento sa pamamagitan ng pag-iingat nito nang maayos dahil karamihan sa mga itinapon na semento ay mula sa deformed na semento.</li>
						<li>Gamitin ang itinapon na semento para sa pagtatapon.</li>
						<li>Gamitin para sa paggawa ng mga kalsada o landas.</li>
					</ul>
				</div>
				<div className={home_styles.section_three}>
					<h1>Panukala na muling gamitin sa gobyerno ang itinapon na semento</h1>
				</div>
				<div className={home_styles.section_list}>
					<h2>Inirerekomenda ko ang mga sumusunod na gamitin muli ang mga itinapon na semento sa gobyerno</h2>
					
				<ul>
					<li>Gamitin para sa permeable na paving para sa mga walkway, driveway, at iba pang panlabas na hard surface.</li>
					<li>Gamitin ito bilang ilalim na bahagi para sa bagong aspalto na paving.</li>
					<li>Gamitin ito para sa isang materyal na pundasyon para sa mga trench na naglalaman ng mga linya ng utility sa ilalim ng lupa.</li>
					<li>Gamitin ang durog na semento para sa paghahalo ng bagong kongkreto.</li>
					<li>Gamitin ito para sa pagkontrol sa streambank erosion.</li>
					<li>Gamitin ito bilang landscaping mulch.</li>
					<li>Gamitin ito upang punan ang mga wire gabion.</li>
					<li>Gamitin bilang isang materyal para sa pagbuo ng mga bagong tirahan ng karagatan.</li>
					<li>Gamitin ito para sa mga layuning pampalamuti.</li>
				</ul>
				</div>
				<div className={home_styles.section_four}>
					<h1>Panukala sa pagtitipid ng semento sa mga tagapamahala ng konstruksiyon. Inirerekomenda ko ang pagkakaroon ng mas mahigpit na mga alituntunin sa paghawak ng semento sa pamamagitan ng pagsunod sa mga alituntuning ito</h1>
				</div>
				<div className={home_styles.section_list}>
					<h2>Pag-iimbak ng semento</h2>
					<ul>
						<li>Iwasang iimbak ito sa mamasa-masa at basa-basa na kapaligiran. Sa halip, itago ang mga ito sa isang tuyo, nakapaloob na lugar na protektado mula sa ulan.</li>
						<li>Ang mga stacking bag ng semento ay dapat na sakop ng tarpaulin o waterproof sheet.</li>
						<li>Huwag iimbak ang mga ito sa kongkreto o kahoy na sahig. Ilagay ang mga ito sa isang nakataas na ibabaw na pinoprotektahan ng isang impermeable na plastic sheet.</li>
						<li>Mag-imbak ng mga bag ng semento nang hiwalay. Mahalagang hindi sila inilalagay kasama ng iba pang mga produkto, tulad ng mga pataba, dahil maaaring maapektuhan ang kalidad at pagganap ng iyong kongkreto dahil sa kontaminasyon.</li>
						<li>Magbigay ng sapat na bentilasyon, maaari itong gawin sa pamamagitan ng paglalagay ng mga bag sa mga papag, kung mayroon ka man.</li>
						<li>Pag-rotate ang stock, lalo na kung mayroon kang higit sa dalawang bag ng semento. Lumalala ang lakas ng semento sa paglipas ng panahon, kaya laging gamitin ang produkto ayon sa petsa ng gumawa at gamitin muna ang pinakalumang stock.</li>
						<li>Ang anumang semento na natira sa kalahating laman na mga bag mula sa isang nakaraang proyekto ay dapat gamitin muna, kung magsisimula ka ng isang bagong proyekto. Kung mayroon kang natirang semento kasunod ng iyong proyekto, tiyaking ang semento ay muling nakalagay sa mga heavy-duty na plastic bag na makapal, ang mga layered bin liners ay dapat gumawa ng trick dito. Siguraduhin na ang mga bibig ay ligtas na selyo ng string o duct tape at tiyaking walang mga butas.</li>
					</ul>
				</div>
				<div className={home_styles.section_list}>
					<h2>Paghawak ng semento</h2>
					<ul>
						<li>Siguraduhing hindi nahuhulog ang mga bag ng semento. Dapat silang maingat na ilagay sa isang patag, nakataas na ibabaw.</li>
						<li>Ikulong ang mga supot ng semento bago buhatin. Makakatulong ito upang maluwag ang semento, samakatuwid ay nabawasan ang pagkakataong mahati ang bag.</li>
						<li>Huwag magdala ng mga supot ng semento sa mga dulo. Ang bag ay dapat na suportado sa ilalim, na pumipigil sa bag na lumubog sa gitna at pagkatapos ay mahati.</li>
						<li>Siguraduhin na ang mga bag ng semento ay hindi kailanman nakaimbak nang patayo o sa kanilang gilid. Dapat silang ilagay ang patag na may malalawak na gilid pababa.</li>
					</ul>
				</div>
				<div className={home_styles.section_list}>
					<h2>Pagdadala ng semento</h2>
					<ul>
						<li>Upang maiwasang mabutas o masira ang mga bag, tiyaking maalis ang lahat ng matutulis na bagay sa sasakyan bago i-load ang mga bag sa boot.</li>
						<li>Kapag naglo-load, siguraduhin na ang mga bag ay nakasalansan sa mga alternatibong direksyon.</li>
						<li>Takpan ang mga bag ng tarpaulin o waterproof sheet.</li>
						<li>Siguraduhin na ang mga bag ay na-secure nang maayos upang maiwasan ang paggalaw sa panahon ng transportasyon.</li>
					</ul>
				</div>
				<div>
					<iframe src="https://drive.google.com/file/d/1XFN4OYEqb0KnSNTYmEnYEmGHW7b5CjXD/preview" width="640" height="480" allow="autoplay"></iframe>
				</div>
			</div>
		</>
	);
}
