import React from 'react';
import styled from 'styled-components';

const NewsletterSection = styled.div`
  padding: 80px 40px;
  background-color: #6b46c1;
  color: white;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const NewsletterContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const NewsletterTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
  color: white;
`;

const NewsletterSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const SubscribeForm = styled.form`
  display: flex;
  max-width: 500px;
  margin: 0 auto;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 16px 20px;
  border: none;
  border-radius: 8px 0 0 8px;
  font-size: 16px;
  outline: none;

  @media (max-width: 640px) {
    border-radius: 8px;
  }
`;

const SubscribeButton = styled.button`
  padding: 16px 32px;
  background-color: #2d3748;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  @media (max-width: 640px) {
    border-radius: 8px;
  }

  &:hover {
    background-color: #1a202c;
  }
`;

const PrivacyNote = styled.small`
  display: block;
  margin-top: 20px;
  opacity: 0.7;
  font-size: 14px;
`;

const Newsletter = () => {
    return (
        <NewsletterSection>
            <NewsletterContainer>
                <NewsletterTitle>Не пропускайте новые статьи</NewsletterTitle>
                <NewsletterSubtitle>
                    Подпишитесь на мою еженедельную рассылку и получайте советы, уроки и вдохновение прямо на вашу почту
                </NewsletterSubtitle>

                <SubscribeForm>
                    <EmailInput
                        type="email"
                        placeholder="Ваш e-mail адрес"
                        required
                    />
                    <SubscribeButton type="submit">Подписаться</SubscribeButton>
                </SubscribeForm>

                <PrivacyNote>
                    Я уважаю вашу приватность. Вы можете отписаться в любой момент.
                </PrivacyNote>
            </NewsletterContainer>
        </NewsletterSection>
    );
};

export default Newsletter;