import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-5'>
            <div className='border border-mute p-3 text-secondary w-75 mx-auto my-5 text-start'>
                <h5>Difference between authentication and authorization</h5>
                <p>Authentication হলো কে তা যাচাই করা। 
                    যেমনঃ কোনো একটা সংস্থার কর্মীদের আইডি পাসওয়ার্ড যাচাই এবং নিশ্চিতকরণ প্রক্রিয়া।
                     অন্যদিকে authorization হলো ব্যবহারকারীর কোনো নিদিষ্ট অ্যাপ্লিকেশন, ডকুমেন্ট 
                     এবং ডেটাতে অ্যাক্সেস তা যাচাই করা। 
                     যেমনঃ কোনো কর্মীর কোন ফ্লোরে অ্যাক্সেস রয়েছে তা যাচাই করা। 
                     Authentication প্রক্রিয়া সম্পন্ন হওয়ার পর authorization এর কাজ করা যায়।</p>
            </div>
            <div className='border border-mute p-3 text-secondary w-75 mx-auto my-5 text-start'>
                <h5>Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p>গুগল সমর্থিত বিভিন্ন অ্যাপ্লিকেশন সফটওয়্যার যা ডেভেলপারদের 
                    বিভিন্ন অ্যাপ তৈরীতে সাহায্য করে তাই google firebase. 
                    ডেটা স্থানীয়ভাবে বজায় থাকে। 
                    অফলাইনে থাকাকালীনও রিয়েলটাইম ইভেন্টগুলো অব্যাহত থাকে। 
                    তাছাড়া ডেটাবেজে নিরাপদ অ্যাক্সেস দিয়ে সমৃদ্ধ, সহযোগী অ্যাপ্লিকেশন তৈরি করতে দেয়। 
                    For implement authentication: Octa, OneLogin, JumpCloud, Auth0, 
                    Rippling, ForgeRock and CyberArk Identity.</p>
            </div>
            <div className='border border-mute p-3 text-secondary w-75 mx-auto my-5 text-start'>
                <h5>What other services does firebase provide other than authentication?</h5>
                <p>Firebase authentication ছাড়াও বিভিন্ন সেবা প্রদান করে থাকে 
                    যেমন- ক্লাউড ফায়ারস্টোর, ক্লাউড ফাংশন, হোস্টিং, ক্লাউড স্টোরেজ, 
                    গুগল অ্যানালায়টিক্স, প্রেডিকশানস এবং ক্লাউড ম্যাসেজিং। 
                    আর তাছাড়া বিভিন্ন ডেভেলপমেন্ট অ্যাপ্লিকেশন তৈরীতে ফায়ারবেজ ব্যবহৃত হয়।</p>
            </div>
        </div>
    );
};

export default Blogs;