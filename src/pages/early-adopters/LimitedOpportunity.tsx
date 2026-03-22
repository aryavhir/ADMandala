import React from 'react';
import PremiumCTA from '../../components/premium/PremiumCTA';

const LimitedOpportunity: React.FC = () => {
    const registrationUrl = import.meta.env.VITE_PUBLISHER_REGISTRATION_URL ?? '#';

    return (
        <PremiumCTA
            badge="Limited Opportunity"
            title="Don't Miss the Window"
            description="The Early Adopter Program is available for a limited time, and the Founding Publisher Partners group is selective and capped. Secure your position early."
            buttonText="Apply as a Publisher"
            onButtonClick={() => window.open(registrationUrl, '_blank')}
        />
    );
};

export default LimitedOpportunity;
