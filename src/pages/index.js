import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				8090scafe
			</title>
			<meta name={"description"} content={"Web site created by wetar.org"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Text margin="0px 0px 0px 0px" text-align="center" font="--headline1">
			<Strong>
				8090s CAFE
			</Strong>
		</Text>
		<Section
			padding="40px 0 40px 0"
			background="url(https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover no-repeat"
			min-height="100vh"
			lg-padding="80px 0 80px 0"
			md-padding="96px 0 96px 0"
			sm-padding="72px 0 96px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="center"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 40px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
					width="80%"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					sm-width="100%"
				>
					FRESHLY PREPARED PIZZAS
				</Text>
				<Text
					margin="0px 0px 32px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					text-align="center"
				>
					<Strong>
						THIN CRUST AND ORGANIC
					</Strong>
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 64px 0px"
				width="100%"
				sm-margin="0px 0px 30px 0px"
				padding="0px 200px 0px 200px"
				lg-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 16px 0px" font="--headline1" text-align="center" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					MENU
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" text-align="center" font="--lead">
					PIZZAS BURGER SANDICH
					<br />
					MILKSHAKE DESSERT FRAPPES
				</Text>
			</Box>
			<Box
				display="grid"
				flex-wrap="wrap"
				width="100%"
				align-items="center"
				justify-content="center"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="30px"
				md-grid-template-columns="1fr"
			>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					height="100%"
				>
					<Image
						src="https://uploads.quarkly.io/61cdc2e89ff3b4001e2bef73/images/Untitled%20story%20%281%29.png?v=2022-01-01T12:15:49.225Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						object-fit="cover"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					height="100%"
				>
					<Image
						src="https://uploads.quarkly.io/61cdc2e89ff3b4001e2bef73/images/Untitled%20story%20%282%29.png?v=2022-01-01T12:16:42.040Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						object-fit="cover"
					/>
				</Box>
				<Box
					width="100%"
					display="flex"
					padding="7px 7px 40px 7px"
					border-radius="24px"
					align-items="center"
					flex-direction="column"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					justify-content="center"
					height="100%"
				>
					<Image
						src="https://uploads.quarkly.io/61cdc2e89ff3b4001e2bef73/images/Untitled%20story%20%283%29.png?v=2022-01-01T12:17:11.711Z"
						border-radius="16px"
						margin="0px 0px 32px 0px"
						max-width="100%"
						md-width="100%"
						width="100%"
						object-fit="cover"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#f2d41d" color="#f2d111">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Customer Feedback
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				align-content="center"
				justify-content="center"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="auto"
				>
					<Text margin="0px 0px 0px 0px" color="--light" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							High quality Pizzas at affordable price
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--lead">
						Ravikumar, MGMC
					</Text>
				</Box>
				<Box
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="auto"
				>
					<Text margin="0px 0px 0px 0px" color="--light" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Tasty and cheesy
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--lead">
						Anitha, Anugraha
					</Text>
				</Box>
				<Box
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
					height="auto"
				>
					<Text margin="0px 0px 0px 0px" color="--light" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--dark"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Served quickly and food was great
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" color="--light" font="--lead">
						Ravikumar, MGMC
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					FOOD DELVERIED BY{" "}
				</Text>
				<Image src="https://uploads.quarkly.io/61cdc2e89ff3b4001e2bef73/images/1200px-Swiggy_logo.svg.png?v=2022-01-01T12:12:00.554Z" display="block" width="400px" height="auto" />
			</Box>
		</Section>
		<Section background="#f2d111" padding="60px 0" sm-padding="40px 0" color="#f2d111">
			<Box
				margin="-16px -16px -16px -16px"
				padding="0px 0px 0px 0px"
				display="flex"
				width=" "
				flex-wrap="wrap"
			>
				<Box
					padding="16px 16px 16px 16px"
					display="flex"
					width="50%"
					lg-width="100%"
					background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) 0% 0% /cover repeat scroll padding-box"
				/>
				<Box display="flex" width="50%" flex-wrap="wrap" lg-width="100%">
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="100%"
						lg-width="33.3333%"
						md-width="100%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 624px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
					<Box
						padding="16px 16px 16px 16px"
						display="flex"
						width="50%"
						lg-width="33.3333%"
						md-width="50%"
						sm-width="100%"
					>
						<Box
							padding="0px 0px 296px 0px"
							display="flex"
							flex-direction="column"
							background="url(https://images.unsplash.com/photo-1620360289812-0abdae69d6d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000) center/cover"
							width="100%"
							lg-padding="0px 0px 248px 0px"
							sm-padding="0px 0px 380px 0px"
						/>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0">
			<Link text-decoration-line="none" variant="--base" color="--light" hover-color="--primary">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
				>
					8090S CAFE             ALL Rights Reserved       8090scafe@gmail.com
				</Strong>
			</Link>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://wetar.org"}
			target={"_blank"}
		>
			Made by Wetar
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"61cdc2e89ff3b4001e2bef71"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
