import React, { Component } from 'react';
import { convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './editor.module.css';

const content = {
	entityMap: {},
	blocks: [
		{
			key: '637gr',
			text: 'Initialized from content state.',
			type: 'unstyled',
			depth: 0,
			inlineStyleRanges: [],
			entityRanges: [],
			data: {},
		},
	],
};

class EditorConvertToJSON extends Component {
	constructor(props) {
		super(props);
		const contentState = convertFromRaw(content);
		this.state = {
			contentState,
		};
	}

	onContentStateChange: Function = (contentState) => {
		this.setState({
			contentState,
		});
	};

	render() {
		const { contentState } = this.state;
		return (
			<div className={styles.editorWrapper}>
				<h1 className={styles.head}>Write what you're thinking</h1>
				<div>
					<Editor
						wrapperClassName={styles.wrapper}
						editorClassName={styles.editor}
						toolbarClassName={styles.toolbar}
						onContentStateChange={this.onContentStateChange}
						placeholder='Start from here...'
					/>
				</div>
				<div className={styles.submit}>
					<input
						className={styles.input}
						type='submit'
						value='submit'
						onClick={() => console.log(contentState)}
					/>
				</div>
			</div>
		);
	}
}

export default EditorConvertToJSON;
