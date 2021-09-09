import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
} from "@wordpress/block-editor";
import {
	Panel,
	PanelBody,
	TextControl,
	PanelRow,
	SelectControl,
} from "@wordpress/components";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
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
	const blockProps = useBlockProps({
		className: `mx-auto align${blockWidth} flow-top-${outerTopMargin} flow-bottom-${outerBottomMargin} gutter-${gutter} breakpoint-${breakpoint} max-col-${idealColumns} child-max-width-${childMaxWidth} child-min-width-${childMinWidth} justify-${justifyContent}`,
	});
	return [
		<InspectorControls>
			<Panel>
				<PanelBody>
					<PanelRow>
						<SelectControl
							label="Block Width"
							value={attributes.blockWidth}
							options={[
								{ label: "Small", value: "small" },
								{ label: "Medium", value: "medium" },
								{ label: "Large", value: "large" },
								{ label: "Wide", value: "wide" },
								{ label: "Full", value: "full" },
							]}
							onChange={(newval) => setAttributes({ blockWidth: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Outer Top Margin"
							value={attributes.outerTopMargin}
							options={[
								{ label: "None", value: "none" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
							]}
							onChange={(newval) => setAttributes({ outerTopMargin: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Outer Bottom Margin"
							value={attributes.outerBottomMargin}
							options={[
								{ label: "None", value: "none" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
							]}
							onChange={(newval) =>
								setAttributes({ outerBottomMargin: newval })
							}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Content Gutter Size"
							value={attributes.gutter}
							options={[
								{ label: "None", value: "none" },
								{ label: "Extra Small", value: "xs" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
								{ label: "XX Large", value: "xxl" },
							]}
							onChange={(newval) => setAttributes({ gutter: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Max No of Columns"
							value={attributes.idealColumns}
							options={[
								{ label: "2", value: "2" },
								{ label: "3", value: "3" },
								{ label: "4", value: "4" },
								{ label: "5", value: "5" },
								{ label: "6", value: "6" },
							]}
							onChange={(newval) => setAttributes({ idealColumns: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Breakpoint for Multiple Columns"
							value={attributes.breakpoint}
							options={[
								{ label: "None", value: "none" },
								{ label: "Extra Small", value: "xs" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
								{ label: "XX Large", value: "xxl" },
							]}
							onChange={(newval) => setAttributes({ breakpoint: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Children Min Width"
							value={attributes.childMinWidth}
							options={[
								{ label: "None", value: "none" },
								{ label: "Extra Small", value: "xs" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
								{ label: "XX Large", value: "xxl" },
							]}
							onChange={(newval) => setAttributes({ childMinWidth: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Children Max Width"
							value={attributes.childMaxWidth}
							options={[
								{ label: "None", value: "none" },
								{ label: "Extra Small", value: "xs" },
								{ label: "Small", value: "sm" },
								{ label: "Medium", value: "md" },
								{ label: "Large", value: "lg" },
								{ label: "X Large", value: "xl" },
								{ label: "XX Large", value: "xxl" },
							]}
							onChange={(newval) => setAttributes({ childMaxWidth: newval })}
						/>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Justify Content"
							value={attributes.justifyContent}
							options={[
								{ label: "Left", value: "start" },
								{ label: "Centre", value: "center" },
								{ label: "Right", value: "right" },
							]}
							onChange={(newval) => setAttributes({ justifyContent: newval })}
						/>
					</PanelRow>
				</PanelBody>
			</Panel>
		</InspectorControls>,
		<div {...blockProps}>
			<InnerBlocks allowedBlocks={["kd-flow/inner-content"]} />
		</div>,
	];
}
