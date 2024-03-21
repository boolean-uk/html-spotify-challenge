import React from "react";

export enum THUMBNAIL_SIZE {
	S = "S",
	M = "M",
	L = "L",
}
export type MusicThumbnailProps = {
	img: string;
	text: string;
	description?: string;
	size?: THUMBNAIL_SIZE;
	rounded?: boolean;
	actionCallback?: () => never;
};

export default function MusicThumbnail({
	img,
	text,
	description,
	size = THUMBNAIL_SIZE.S,
	rounded = false,
	actionCallback,
}: MusicThumbnailProps) {
	return (
		<figure
			onClick={() => actionCallback && actionCallback()}
			className={`
      thumbnail
      ${rounded ? "thumbnail--rounded" : ""}
      thumbnail--${size}
    `}>
			<img src={img} />
			<figcaption className={`thumbnail--${size}__title`}>
				{text}
			</figcaption>
			<p className="thumbnail__descp">{description}</p>
		</figure>
	);
}
