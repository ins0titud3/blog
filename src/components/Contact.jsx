import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.div`
  padding: 80px 40px;
  background-color: #ffffff;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 16px;
  text-align: center;
  color: #2d3748;
`;

const SectionSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 48px;
  text-align: center;
  color: #4a5568;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactContent = styled.div`
  display: flex;
  gap: 40px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContactFormContainer = styled.div`
  flex: 1;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
  color: #2d3748;
`;

const FormInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #6b46c1;
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  resize: vertical;
  min-height: 120px;
  outline: none;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #6b46c1;
  }
`;

const SubmitButton = styled.button`
  padding: 14px 28px;
  background-color: #6b46c1;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
  
  &:hover {
    background-color: #553c9a;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(107, 70, 193, 0.3);
  }
`;

const ContactInfoContainer = styled.div`
  flex: 1;
`;

const ContactInfo = styled.div`
  background-color: #f7fafc;
  padding: 32px;
  border-radius: 12px;
  height: 100%;
`;

const ContactInfoTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 24px;
  color: #2d3748;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const ContactInfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ebf4ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b46c1;
  font-size: 18px;
`;

const ContactInfoContent = styled.div``;

const ContactInfoLabel = styled.h4`
  font-size: 18px;
  margin-bottom: 4px;
  color: #2d3748;
`;

const ContactInfoValue = styled.p`
  color: #4a5568;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #6b46c1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    background-color: #553c9a;
  }
`;

const Contact = () => {
    return (
        <ContactSection>
            <ContactContainer>
                <SectionTitle>Свяжитесь со мной</SectionTitle>
                <SectionSubtitle>
                    Есть вопросы или предложения? Не стесняйтесь написать мне, и я отвечу вам как можно скорее
                </SectionSubtitle>

                <ContactContent>
                    <ContactFormContainer>
                        <ContactForm>
                            <FormGroup>
                                <FormLabel>Имя</FormLabel>
                                <FormInput type="text" placeholder="Ваше имя" required />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Email</FormLabel>
                                <FormInput type="email" placeholder="Ваш email адрес" required />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Тема</FormLabel>
                                <FormInput type="text" placeholder="Тема сообщения" />
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Сообщение</FormLabel>
                                <FormTextarea placeholder="Ваше сообщение..." required />
                            </FormGroup>

                            <SubmitButton type="submit">Отправить сообщение</SubmitButton>
                        </ContactForm>
                    </ContactFormContainer>

                    <ContactInfoContainer>
                        <ContactInfo>
                            <ContactInfoTitle>Контактная информация</ContactInfoTitle>

                            <ContactInfoList>
                                <ContactInfoItem>
                                    <ContactInfoIcon>✉</ContactInfoIcon>
                                    <ContactInfoContent>
                                        <ContactInfoLabel>Email</ContactInfoLabel>
                                        <ContactInfoValue>hello@mindflow.blog</ContactInfoValue>
                                    </ContactInfoContent>
                                </ContactInfoItem>

                                <ContactInfoItem>
                                    <ContactInfoIcon>📱</ContactInfoIcon>
                                    <ContactInfoContent>
                                        <ContactInfoLabel>Телефон</ContactInfoLabel>
                                        <ContactInfoValue>+7 (999) 123-45-67</ContactInfoValue>
                                    </ContactInfoContent>
                                </ContactInfoItem>

                                <ContactInfoItem>
                                    <ContactInfoIcon>📍</ContactInfoIcon>
                                    <ContactInfoContent>
                                        <ContactInfoLabel>Локация</ContactInfoLabel>
                                        <ContactInfoValue>Москва, Россия</ContactInfoValue>
                                    </ContactInfoContent>
                                </ContactInfoItem>
                            </ContactInfoList>

                            <SocialLinks>
                                <SocialLink href="#" aria-label="Twitter">T</SocialLink>
                                <SocialLink href="#" aria-label="Instagram">I</SocialLink>
                                <SocialLink href="#" aria-label="LinkedIn">L</SocialLink>
                                <SocialLink href="#" aria-label="GitHub">G</SocialLink>
                            </SocialLinks>
                        </ContactInfo>
                    </ContactInfoContainer>
                </ContactContent>
             </ContactContainer>
        </ContactSection>
    );
};

export default Contact