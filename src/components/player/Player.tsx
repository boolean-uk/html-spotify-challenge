import React from "react";
import MusicThumbnail, {
	MusicThumbnailProps,
} from "../thumbnails/MusicThumbnail";
import LazyRangeInput from "./LazyRangeInput";

const DUMMY_SONG: MusicThumbnailProps = {
	text: "I Should've Known",
	img: "/public/assets/img/aquietplace.jpeg",
};

export default function Player() {
	return (
		<div className="player">
			<PlayerThumbnail></PlayerThumbnail>

			<span className="player__music-controls">
				<PlayerActions></PlayerActions>
				<PlayerTime></PlayerTime>
			</span>

			<PlayerOther></PlayerOther>
		</div>
	);
}

function PlayerThumbnail() {
	return (
		<span className="player__thumbnail">
			<MusicThumbnail {...DUMMY_SONG}></MusicThumbnail>
			<i className="fa-regular fa-heart"></i>
			<i className="fa-regular fa-folder"></i>
		</span>
	);
}

function PlayerActions() {
	return (
		<span className="player__music-controls__actions">
			<i className="fa-solid fa-shuffle"></i>
			<i className="fa-solid fa-backward-step"></i>
			<i className="fa-regular fa-circle-play"></i>
			<i className="fa-solid fa-forward-step"></i>
			<i className="fa-solid fa-rotate-right"></i>
		</span>
	);
}

function PlayerTime() {
	return (
		<span className="player__music-controls__time">
			<p>1:35</p>
			{/* Use regular range input and update its value using a timer */}
			<LazyRangeInput></LazyRangeInput>
			<p>6:35</p>
		</span>
	);
}

function PlayerOther() {
	return (
		<span className="player__music-controls__other">
			<i className="fa-solid fa-list"></i>
			<i className="fa-solid fa-tv"></i>
			{/* Add dynamic volume icon */}
			<i className="fa-solid fa-volume-high"></i>
			<LazyRangeInput></LazyRangeInput>
		</span>
	);
}
