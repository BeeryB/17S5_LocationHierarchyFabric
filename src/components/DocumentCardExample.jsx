import React, { Component } from 'react';      
import {
    DocumentCard,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardActivity
} from 'office-ui-fabric-react/lib/DocumentCard';


class DocumentCardExample extends Component {
    
    render() {
        return(
            <div>
                <h2>Document Card</h2><br />
                <DocumentCard onClickHref='http://google.com' id="DocumentCard">
                    <DocumentCardPreview
                    previewImages={ [
                        {
                        previewImageSrc: require('../documentpreview.png'),
                        iconSrc: require('../iconppt.png'),
                        width: 318,
                        height: 196,
                        accentColor: '#ce4b1f',
                        }
                    ] }
                    />
                    <DocumentCardTitle title='Revenue stream proposal fiscal year 2016 version02.pptx'/>
                    <DocumentCardActivity
                    activity='Created Feb 23, 2016'
                    people={
                        [
                        { name: 'Kat Larrson', profileImageSrc: require('../avatarkat.png') }
                        ]
                    }
                    />
                </DocumentCard>
                <br />
            </ div>
        );
    }
}

export default DocumentCardExample;