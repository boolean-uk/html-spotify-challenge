import MusicThumbnail, {
	MusicThumbnailProps,
	THUMBNAIL_SIZE,
} from "../thumbnails/MusicThumbnail";

export default function Nav({
	playlists,
}: {
	// links: { label: string; path: string; icon: string }[];
	playlists: MusicThumbnailProps[];
}) {
	return (
		<nav className="nav">
			<div className="nav__logo"></div>

			{/* Routing links -> Map link objects*/}
			<div className="nav__links">
				<a
					href=""
					className="selected">
					<img
						src="/assets/img/home.svg"
						alt=""
					/>
					<span>Home</span>
				</a>
				<a href="">
					<img
						src="/assets/img/search.svg"
						alt=""
					/>
					<span>Search</span>
				</a>
				<a href="">
					<img
						src="/assets/img/libreria.svg"
						alt=""
					/>
					<span>Library</span>
				</a>
			</div>

			{/* Playlists */}
			<span className="nav__playlists">
				{playlists.map((e, i) => (
					<MusicThumbnail
						{...e}
						key={`nav-playlists-${i}`}></MusicThumbnail>
				))}
			</span>

			{/* Footer */}
			<footer>
				<span className="nav__download">
					<img
						src="/assets/img/download.svg"
						alt=""
					/>
					<span>Download App</span>
				</span>
				<hr />
				<span className="nav__profile">
					<img
						src="/assets/img/player_left.jpg"
						alt=""
					/>
					<span>Dave Grohl</span>
				</span>
			</footer>
		</nav>
	);
}
