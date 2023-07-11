/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Terms = () => {
    return (
        <div className='py-30 container'>
            <div className="text-center md:w-[600px] m-auto">
                <div className="text-4xl font-bold">Terms of Service</div>
                <div className="mt-1 text-sm">Last Updated: April 1, 2023</div>
            </div>
            <div className="text-lg font-medium text-primary mt-5 mb-40 whitespace-pre-wrap">
                {
                    `
Welcome to mediumworx! We’re here to help you enhance your daily operations by leveraging the power of artificial intelligence. These Terms of Service ("Terms") govern your access to and use of mediumworx LLC's services, including our website (mediumworx), applications, content, and other services provided by mediumworx LLC (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.

1. License Grant
Subject to these Terms, mediumworx LLC grants you a limited, non-exclusive, non-transferable, non-sublicensable license to access and use the Service for your internal business purposes.
    
2. Restrictions
You may not: (a) reverse engineer, disassemble, or decompile the Service, or attempt to discover the source code or underlying ideas or algorithms of the Service; (b) modify, alter, or create derivative works based on the Service; (c) sublicense, rent, lease, or otherwise transfer the Service; (d) use the Service for any purpose that is unlawful or prohibited by these Terms; (e) use the Service to violate any applicable law or regulation; or (f) use the Service in any manner that could damage, disable, overburden, or impair the Service.
    
3. Intellectual Property
All intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Service are owned by mediumworx LLC or its licensors. You acknowledge that you do not acquire any ownership rights in the Service by using the Service.
                    `
                }

            </div>

        </div>
    )
}

export default Terms