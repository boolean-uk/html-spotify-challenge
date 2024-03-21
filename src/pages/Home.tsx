import React from "react";
import TabNav from "../components/nav/TabNav";
import MusicThumbnail, {
	MusicThumbnailProps,
	THUMBNAIL_SIZE,
} from "../components/thumbnails/MusicThumbnail";

type HomeRow = { title: string; data: MusicThumbnailProps[] };

const DUMMY_DATA: HomeRow[] = [
	//RECENTLY PLAYED
	{
		title: "Recently Played",
		data: [
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
			{
				img: "/public/assets/img/metal_lifting.jpg",
				text: "Heavy Metal",
				description: "someText",
			},
		],
	},
	//Created for you
	{
		title: "For You",
		data: [
			{ img: "/public/assets/img/mixdaily.jpeg", text: "Daily Mix 1" },
		],
	},
	//Popular Artists
	{
		title: "Popular Artists",
		data: [
			{
				img: "/public/assets/img/cure.jpeg",
				text: "Foo Fighters",
				rounded: true,
			},
		],
	},
];

export default function Home() {
	return (
		<section className="section home">
			{/* Navigation */}
			<TabNav></TabNav>
			{/*List of  Playlist Groups */}
			{/* Group of Artists as well */}
			{DUMMY_DATA.map((row, i) => (
				<div
					className="home__row"
					key={"home-row" + i}>
					<h2 className="home__row__title">{row.title}</h2>
					<div className="home__row__data">
						{row.data.map((thumbnail, j) => (
							<MusicThumbnail
								{...thumbnail}
								size={THUMBNAIL_SIZE.L}
								key={`home-row-${i}-music-${j}`}></MusicThumbnail>
						))}
					</div>
				</div>
			))}
		</section>
	);
}
