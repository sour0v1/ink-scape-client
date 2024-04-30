import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-6xl mx-auto my-9'>
            <h2 className='my-9 text-2xl font-bold text-center'>FAQ</h2>
            <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What payment methods do you accept?
                    </div>
                    <div className="collapse-content">
                        <p>We accept Visa, Mastercard, American Express, Discover, and PayPal.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Do you have a physical store location?
                    </div>
                    <div className="collapse-content">
                        <p>Currently, we are exclusively online but offer fast shipping.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Do you offer international shipping?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, we offer international shipping with varying costs and delivery times.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        What is your return policy?
                    </div>
                    <div className="collapse-content">
                        <p>Returns are accepted within 30 days for a full refund or exchange.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        Can I cancel or modify my order after it has been placed?
                    </div>
                    <div className="collapse-content">
                        <p>Contact us immediately for order changes; changes cannot be made after shipping.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow join-item border border-base-300">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title text-xl font-medium">
                        How can I track my order?
                    </div>
                    <div className="collapse-content">
                        <p>Once shipped, track your order with the provided tracking number.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;