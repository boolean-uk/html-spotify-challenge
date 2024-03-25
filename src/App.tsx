import Nav from "./components/nav/Nav";
import Player from "./components/player/Player";
import { MusicThumbnailProps } from "./components/thumbnails/MusicThumbnail";
import Home from "./pages/Home";

const DUMMY_PLAYLISTS: MusicThumbnailProps[] = [
	{ img: "/assets/img/download.svg", text: "Create Playlist" },
	{ img: "/assets/img/metal_lifting.jpg", text: "Metal Mix" },
];

function App() {
	return (
		<>
			{/* Nav */}
			<Nav playlists={DUMMY_PLAYLISTS}></Nav>
			{/* Content -> Routing here */}
			<main>
				{/* Should be a component to then render a more complex navbar once user is logged in */}
				<nav className="secondary-nav">
					<button className="btn">Login</button>
				</nav>

				{/* ===== DYNAMIC CONTENT START*/}
				<Home></Home>

				{/* ===== DYNAMIC CONTENT END*/}
			</main>
			{/* Player -> Display dynamically*/}
			<Player></Player>
		</>
	);
}

export default App;
