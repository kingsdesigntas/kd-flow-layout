import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		blockWidth,
		outerBottomMargin,
		outerTopMargin,
		gutter,
		idealColumns,
		breakpoint,
		childMaxWidth,
		childMinWidth,
		justifyContent,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `mx-auto align${blockWidth} gutter-${gutter} flow-top-${outerTopMargin} flow-bottom-${outerBottomMargin} breakpoint-${breakpoint} max-col-${idealColumns} child-max-width-${childMaxWidth} child-min-width-${childMinWidth} justify-${justifyContent}`,
			})}
		>
			<div
				{...useBlockProps.save({
					className: `albatross justify-${justifyContent}`,
				})}
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
