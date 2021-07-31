import React from 'react';
import { Card, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const UploadAssignment = () => {
	const props = {
		name: 'file',
		multiple: true,
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				console.log(`file uploaded successfully.`);
			} else if (status === 'error') {
				console.log(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files);
		},
	};
	return (
		<Card title='Upload Assignment'>
			<Dragger {...props}>
				<p className='ant-upload-drag-icon'>
					<InboxOutlined />
				</p>
				<p className='ant-upload-text'>or drop file here, pdf or word doc.</p>
				{/* <p className='ant-upload-hint'>
					Support for a single or bulk upload. Strictly prohibit from uploading
					company data or other band files
				</p> */}
			</Dragger>
		</Card>
	);
};

export default UploadAssignment;
