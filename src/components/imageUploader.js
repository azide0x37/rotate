import React, {
	Component
} from 'react';
import Amplify, {
	//API,
	Auth,
	Storage
} from 'aws-amplify';

import ImageUploader from 'react-images-upload';

Amplify.configure(
    Auth: {
        identityPoolId: 'us-east-1:01395ccc-0844-4002-9917-be1b9ad98329', // REQUIRED - Amazon Cognito Identity Pool ID
    		region: 'us-east-1', 																							// REQUIRED - Amazon Cognito Region
        userPoolId: 'us-east-1_hb1vHwFWL', 																// OPTIONAL - Amazon Cognito User Pool ID
        userPoolWebClientId: '4264r3osuh6dg5giimlau0mtcb', 								// OPTIONAL - Amazon Cognito Web Client ID
    },
    Storage: {
        bucket: 'rotate-aircraft-image-uploads', 					// REQUIRED -  Amazon S3 bucket
        region: 'us-east-1',	// OPTIONAL -  Amazon service region
    }
);

export default class AircraftImageUploader extends Component {
    constructor(props) {
        super(props);
        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    render() {
        return (
            <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={15242880}
            />
        );
    }
}
