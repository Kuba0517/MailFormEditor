export default function socialMediaTemplate({ companyName, firstParagraph, senderName }) {
    return `
    <style>
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&display=swap');

	* {
		box-sizing: border-box;
		font-family: 'Manrope', sans-serif;
	}

	body {
		margin: 0;
		padding: 0;
	}

	a[x-apple-data-detectors] {
		color: inherit !important;
		text-decoration: inherit !important;
	}

	#MessageViewBody a {
		color: inherit;
		text-decoration: none;
	}

	p {
		line-height: inherit
	}

	.desktop_hide,
	.desktop_hide table {
		mso-hide: all;
		display: none;
		max-height: 0px;
		overflow: hidden;
	}

	.image_block img+div {
		display: none;
	}

	@media (max-width:700px) {
		.desktop_hide table.icons-inner {
			display: inline-block !important;
		}

		.icons-inner {
			text-align: center;
		}

		.icons-inner td {
			margin: 0 auto;
		}

		.social_block.desktop_hide .social-table {
			display: inline-block !important;
		}

		.row-content {
			width: 100% !important;
		}

		.stack .column {
			width: 100%;
			display: block;
		}

		.mobile_hide {
			max-width: 0;
			min-height: 0;
			max-height: 0;
			font-size: 0;
			display: none;
			overflow: hidden;
		}

		.desktop_hide,
		.desktop_hide table {
			max-height: none !important;
			display: table !important;
		}

		.row-4 .column-1 .block-1.paragraph_block td.pad {
			padding: 5px 30px !important;
		}

		.row-5 .column-1 .block-2.heading_block h2,
		.row-8 .column-1 .block-1.heading_block h2 {
			font-size: 20px !important;
		}

		.pad {
			text-align: center !important;
			margin: auto !important;
		}
	}
</style>
<table class="nl-container" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #fff;"
	role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0">
	<tbody>
		<tr>
			<td>
				<table class="row row-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 10px; padding-top: 20px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="icons_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad"
																style="vertical-align: middle; color: #000000; font-family: 'Manrope', sans-serif; font-size: 14px; text-align: center;">
																<table class="alignment"
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	role="presentation" cellspacing="0" cellpadding="0"
																	align="center">
																	<tbody>
																		<tr>
																			<td
																				style="vertical-align: middle; text-align: center; padding: 20px;">
																				<img class="icon"
																					style="height: auto; display: block; margin: 0 auto; border: 0;"
																					src="https://i.postimg.cc/SY46KRCF/1-sway-logo.png"
																					width="32" height="32"
																					align="center">
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-2" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-size: auto;"
					role="presentation" border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; background-size: auto; border: 0 solid #fff; border-radius: 30px 30px 0 0; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; vertical-align: top; border: 0px;"
												width="100%">
												<div class="spacer_block block-1"
													style="height: 40px; line-height: 40px; font-size: 1px;">&nbsp;
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-3" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; vertical-align: top; border: 0px;"
												width="100%">
												<table class="heading_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="10">
													<tbody>
														<tr>
															<td class="pad">
																<h1
																	style="margin: 0; color: #7421fc; direction: ltr; font-family: 'Manrope', sans-serif ; font-size: 38px; font-weight: bold; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
																	<strong>
																		<span class="tinyMce-placeholder">HEJ EKIPA
																			"${companyName}",</span>
																	</strong>
																</h1>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-4" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 60px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="paragraph_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad" style="padding: 5px 60px 5px 60px;">
																<div
																	style="color: #878787; direction: ltr; font-family:  'Manrope', sans-serif; font-size: 16px; letter-spacing: 0px; line-height: 120%; text-align: center;">
																	<p style="margin: 0px 0px 16px;">
																		${firstParagraph}
																	</p>
																	<p style="margin: 0px 0px 16px;">
																		<span style="font-weight: 400;">Prowadzę agencję
																			marketingu cyfrowego, która oferuje szeroki
																			wachlarz usług, w tym</span>
																		<strong>prowadzenie i optymalizację kont w
																			mediach społecznościowych, tworzenie i
																			udoskonalanie stron internetowych, SEO oraz
																			strategie reklamowe w internecie.</strong>
																		<span style="font-weight: 400;">Nasz zespół
																			specjalistów jest gotowy, aby pomóc firmom,
																			takim jak Twoja, w osiąganiu</span>
																		<strong>większych zysków i pozyskiwaniu nowych
																			klientów</strong> poprzez skuteczne i
																		celowane strategie reklamowe.
																	</p>
																	<p style="margin: 0px 0px 16px;">Pierwsze, co rzuca
																		mi się w oczy, to ogromny
																		<strong>potencjał Twoich mediów
																			społecznościowych,</strong> który nie jest w
																		pełni wykorzystany. Posiadamy doświadczenie i
																		wiedzę, które pozwolą nam przekształcić Twoje
																		profile w narzędzie budowania lojalnej
																		społeczności i generowania nowych leadów.
																		Wykorzystując moc targetowania Facebooka, możemy
																		stworzyć atrakcyjne i skuteczne kampanie, które
																		przyciągną
																		<strong>więcej potencjalnych klientów do Twojej
																			firmy.</strong>
																	</p>
																	<p style="margin: 0px 0px 16px;">
																		<span style="font-weight: 400;">Po drugie,
																			zauważyłem, że na Twojej stronie
																			internetowej oraz profilach na mediach
																			społecznościowych kryje się</span>
																		<strong>niewykorzystany potencjał SEO i reklamy
																			online.</strong> Dzięki naszym usługom SEO
																		możemy zwiększyć ruch na Twojej stronie i
																		poprawić jej pozycję w wynikach wyszukiwania.
																		Ponadto, nasze strategie reklamowe online są
																		skrojone na miarę Twoich potrzeb, aby jak
																		najlepiej dotrzeć
																		<strong>do Twojego idealnego klienta.</strong>
																	</p>
																	<p style="font-weight: 400; margin: 0px 0px 16px;">
																		Chętnie przeprowadzę z Tobą pięciominutową
																		<strong>rozmowę telefoniczną</strong> i pokażę
																		Ci, jak bym to zrobił gdybyśmy rozpoczęli
																		współpracę (a przy okazji dam Ci
																		<strong>kilka darmowych wskazówek</strong>
																		dotyczących Twojej strony internetowej).
																	</p>
																	<p style="font-weight: 400; margin: 0px 0px 16px;">
																		To nie będzie rozmowa sprzedażowa, a raczej
																		przyjacielska pogawędka. Właściwie, jeśli
																		odpowiesz na ten email i
																		<strong>zaproponujesz datę i godzinę,</strong> z
																		przyjemnością wyślę Ci kartę podarunkową do
																		kawiarni o wartości 20zł, abyśmy mogli zamienić
																		to w wirtualną rozmowę przy kawie.
																	</p>
																	<p style="font-weight: 400; margin: 0px 0px 16px;">
																		<strong>Daj znać, kiedy Ci pasuje!</strong>
																	</p>
																	<p style="font-weight: 400; margin: 0px;">
																		<strong>${senderName}</strong>
																	</p>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-5" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 40px; padding-left: 50px; padding-right: 50px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="button_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="10">
													<tbody>
														<tr>
															<td class="pad"
																style="padding-bottom: 15px; padding-top: 15px; text-align: center; width: 100%; margin: auto;">
																<div class="alignment" align="center">
																	<!-- [if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" style="height:42px;width:179px;v-text-anchor:middle;" arcsize="10%" stroke="false" fillcolor="#7421fc"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Arial, sans-serif; font-size:16px"><![endif]-->
																	<a href="http://agencysway.pl"
																		style="text-decoration: none;">
																		<div
																			style="text-decoration: none; display: inline-block; color: #ffffff; background-color: #7421fc; border-radius: 4px; width: auto; font-weight: 400; padding-top: 5px; padding-bottom: 5px; font-family: 'Manrope', sans-serif; font-size: 16px; text-align: center; mso-border-alt: none; word-break: keep-all; border: 0px solid transparent; margin: auto;">
																			<span
																				style="padding-left: 20px; padding-right: 20px; font-size: 16px; display: inline-block; letter-spacing: normal;">
																				<span
																					style="word-break: break-word; line-height: 32px; cursor:pointer">
																					<strong>DOŁĄCZ DO NAS</strong>
																				</span>
																			</span>
																		</div>
																	</a>
																	<!-- [if mso]></center></v:textbox></v:roundrect><![endif]-->
																</div>
															</td>
														</tr>
													</tbody>

												</table>
												<table class="heading_block block-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad"
																style="padding-bottom: 10px; padding-top: 5px; text-align: center; width: 100%;">
																<h2
																	style="margin: 0; color: #878787; direction: ltr; font-family: 'Manrope', sans-serif; font-size: 26px; font-weight: bold; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
																	<strong>
																		<span class="tinyMce-placeholder">GWARANTUJEMY
																			SUKCES <br> TWOJEJ MARKI ONLINE 🤞🏻 </br>
																		</span>
																	</strong>
																</h2>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-6" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-left: 50px; padding-right: 50px; padding-top: 40px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="paragraph_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad" style="padding: 10px 30px 15px 30px;">
																<div
																	style="color: #888888; font-family: 'Manrope', sans-serif; font-size: 20px; line-height: 120%; text-align: center; mso-line-height-alt: 24px;">
																	<p style="margin: 0;">Wejdź na naszą stronę</p>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
												<table class="heading_block block-2"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad"
																style="padding-bottom: 15px; padding-top: 15px; text-align: center; width: 100%; margin: auto;">
																<h3
																	style="margin: auto; color: #020b22; direction: ltr; font-family:'Manrope', sans-serif; font-size: 24px; font-weight: 400; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
																	<strong>
																		<a href="https://www.agencysway.pl/">
																			<span
																				class="tinyMce-placeholder">agencysway.pl</span>
																		</a>
																	</strong>
																</h3>
															</td>
														</tr>
													</tbody>
												</table>

												<table class="paragraph_block block-3"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad" style="padding: 10px 30px 15px 30px;">
																<div
																	style="color: #888888; direction: ltr; font-family: 'Manrope', sans-serif; font-size: 20px; line-height: 120%; text-align: center; mso-line-height-alt: 24px;">
																	<p style="margin: 0; word-break: break-word;">lub
																		odwiedź nasze profile!</p>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-7" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #fff; border-radius: 0; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; background-color: #7421fc; vertical-align: top; border: 0px; padding: 5px;"
												width="100%">
												<table class="social_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="10">
													<tbody>
														<tr>
															<td class="pad">
																<div class="alignment" align="center">
																	<table class="social-table"
																		style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block;"
																		role="presentation" border="0" width="72px"
																		cellspacing="0" cellpadding="0">
																		<tbody>
																			<tr><!-- <td style="padding:0 2px 0 2px;"><a
																			href="https://www.facebook.com/profile.php?id=100094980935191"
																			target="_blank">
																			<img alt="Facebook"
																				height="32"
																				src="https://i.postimg.cc/4H1zHGQK/facebook2x.png"
																				style="height: auto; display: block; border: 0;"
																				title="facebook"
																				width="32" /> --> <!-- </a></td> -->
																				<td style="padding: 0 2px 0 2px;">
																					<a href="https://www.instagram.com/agencysway/"
																						target="_blank" rel="noopener">
																						<img style="height: auto; display: block; border: 0;"
																							title="instagram"
																							src="https://i.postimg.cc/VdYhGLTV/instagram2x.png"
																							alt="Instagram" width="32"
																							height="32">
																					</a>
																				</td>
																				<!-- <td style="padding:0 2px 0 2px;"><a
																			href="https://www.twitter.com/"
																			target="_blank">
																			<img alt="Twitter"
																				height="32"
																				src="https://i.postimg.cc/ThjSJWkb/twitter2x.png"
																				style="height: auto; display: block; border: 0;"
																				title="twitter"
																				width="32" /> --> <!-- </a></td> -->
																				<td style="padding: 0 2px 0 2px;">
																					<a href="https://www.tiktok.com/@agencysway?lang=pl-PL"
																						target="_blank" rel="noopener">
																						<img style="height: auto; display: block; border: 0;"
																							title="instagram"
																							src="https://i.postimg.cc/rmk3W3Mw/tiktok2x.png"
																							alt="Instagram" width="32"
																							height="32">
																					</a>
																				</td>
																			</tr>
																		</tbody>
																	</table>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-8" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #f2f5ff; border-radius: 0 0 30px 30px; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 15px; padding-top: 15px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="heading_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad"
																style="padding-bottom: 20px; padding-top: 20px; text-align: center; width: 100%;">
																<h2
																	style="margin: 0; color: #8a3c90; direction: ltr; font-family: 'Manrope', sans-serif; font-size: 30px; font-weight: bold; letter-spacing: normal; line-height: 120%; text-align: center; margin-top: 0; margin-bottom: 0;">
																	<span class="tinyMce-placeholder">Oszczędź czas.
																		Zwiększ zyski.</span>
																</h2>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-9" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; background-color: #7421fc; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 25px; padding-top: 25px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="paragraph_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="20">
													<tbody>
														<tr>
															<td class="pad">
																<div
																	style="color: #fafafa; font-family: 'Manrope', sans-serif; font-size: 10px; line-height: 150%; text-align: center; mso-line-height-alt: 15px;">
																	<p style="margin: 0; word-break: break-word;">© 2023
																		<span class="LI ng" data-ddnwab="PR_6_0"
																			aria-invalid="spelling">
																			<span class="LI ng" data-ddnwab="PR_45_0"
																				aria-invalid="spelling">SwayAgency</span>
																		</span>.&nbsp; Wszystkie prawa zastrzeżone.
																	</p>
																</div>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
				<table class="row row-10" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation"
					border="0" width="100%" cellspacing="0" cellpadding="0" align="center">
					<tbody>
						<tr>
							<td>
								<table class="row-content stack"
									style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000; width: 680px; margin: 0 auto;"
									role="presentation" border="0" width="680" cellspacing="0" cellpadding="0"
									align="center">
									<tbody>
										<tr>
											<td class="column column-1"
												style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; text-align: left; font-weight: 400; padding-bottom: 5px; padding-top: 5px; vertical-align: top; border: 0px;"
												width="100%">
												<table class="icons_block block-1"
													style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
													role="presentation" border="0" width="100%" cellspacing="0"
													cellpadding="0">
													<tbody>
														<tr>
															<td class="pad"
																style="vertical-align: middle; color: #9d9d9d; font-family: 'Manrope', sans-serif; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
																<table
																	style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;"
																	role="presentation" width="100%" cellspacing="0"
																	cellpadding="0">
																	<tbody>
																		<tr>
																			<td class="alignment"
																				style="vertical-align: middle; text-align: center;">
																				<!-- [if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
																				<!-- [if !vml]><!-->
																				<table class="icons-inner"
																					style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; display: inline-block; margin-right: -4px; padding-left: 0px; padding-right: 0px;"
																					role="presentation" cellspacing="0"
																					cellpadding="0"><!--<![endif]-->
																				</table>
																			</td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
					</tbody>
				</table>
			</td>
		</tr>
	</tbody>
</table>
<!-- End -->
    `;
}