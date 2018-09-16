import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPane from 'components/editor/EditorPane';
import PreviewPane from 'components/editor/PreviewPane';

const EditorPage = () => {
    return (
        <EditorTemplate
          header={<EditorHeader />}
          preview={<PreviewPane />}
          editor={<EditorPane />}
        />
    );
};

export default EditorPage;