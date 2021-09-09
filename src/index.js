import { registerBlockType } from "@wordpress/blocks";
import "./style.scss";

import Edit from "./edit";
import save from "./save";

registerBlockType("kd-flow/layout", {
	attributes: {
		blockWidth: {
			type: "string",
			default: "large",
		},
		gutter: {
			type: "string",
			default: "lg",
		},
		idealColumns: {
			type: "string",
			default: "3",
		},
		breakpoint: {
			type: "string",
			default: "md",
		},
		childMaxWidth: {
			type: "string",
			default: "md",
		},
		childMinWidth: {
			type: "string",
			default: "lg",
		},
		outerTopMargin: {
			type: "string",
			default: "xl",
		},
		outerBottomMargin: {
			type: "string",
			default: "xl",
		},
		justifyContent: {
			type: "string",
			default: "center",
		},
	},
	edit: Edit,
	save,
});
