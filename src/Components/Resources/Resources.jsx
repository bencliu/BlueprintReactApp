import React from 'react';
import GoogleDocsViewer from '../GoogleView';

function Resources() {
    return (
        <div>
            <GoogleDocsViewer
                width="600px"
                height="780px"
                fileUrl="https://docs.google.com/document/d/1b7lytJI1vdMpMsxUHwoWe29BgnGLWwtohut6jWUlOwE/edit?usp=sharing"
            />
        </div>
    )
}

export default Resources
