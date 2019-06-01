package com.spring.db.demo.notifications;

import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.IOException;
import java.net.URL;

import javax.activation.DataHandler;
import javax.activation.URLDataSource;
import javax.imageio.ImageIO;
import javax.mail.BodyPart;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

public class MailMail {

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private EmailService emailService;

	void sendEmail() {

		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo("to_1@gmail.com", "to_2@gmail.com", "to_3@yahoo.com");

		msg.setSubject("Testing from Spring Boot");
		msg.setText("Hello World \n Spring Boot Email");

		javaMailSender.send(msg);

	}

	public void sendEmail(String qr) throws MessagingException {

		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo("pvreddy.java@gmail.com");

		msg.setSubject("Testing from Spring Boot");
		msg.setText("<H1>Hello</H1><img src=" + qr + ">");

		javaMailSender.send(msg);

		Mail mail = new Mail();
		mail.setFrom("pvreddy.java@gmail.com");
		mail.setTo("pvreddy.java@gmail.com");
		mail.setSubject("Sending Email Attachment Configuration Example");
		mail.setContent(qr);

		// emailservice.sendSimpleMessage(mail);

	}

	public void sendSimpleMessage(Mail mail) throws MessagingException, IOException {

		Image image = null;

		MimeMessage message = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, true);

		helper.setSubject(mail.getSubject());
		helper.setText(mail.getContent());
		helper.setTo(mail.getTo());
		helper.setFrom(mail.getTo());

		URL url = new URL(mail.getContent());
		image = ImageIO.read(url);
		
		

		// Set From: header field of the header.

		// Set To: header field of the header.
		message.setRecipients(Message.RecipientType.TO, InternetAddress.parse("pvreddy.java@gmail.com"));

		// Set Subject: header field
		message.setSubject("Testing Subject");

		// This mail has 2 part, the BODY and the embedded image
		MimeMultipart multipart = new MimeMultipart("related");

		// first part (the html)
		BodyPart messageBodyPart = new MimeBodyPart();
		String htmlText = "<H1>Hello</H1><img src=>";
		messageBodyPart.setContent(htmlText, "text/html");
		// add it
		multipart.addBodyPart(messageBodyPart);

		// second part (the image)
		messageBodyPart = new MimeBodyPart();
		URLDataSource fds = new URLDataSource(url);

		// DataSource fds = new FileDataSource(image);

		messageBodyPart.setDataHandler(new DataHandler(fds));
		messageBodyPart.setHeader("Content-ID", "<image>");

		// add image to the multipart
		multipart.addBodyPart(messageBodyPart);

		// put everything together
		message.setContent(multipart);
		// Send message
		Transport.send(message);

		System.out.println("Sent message successfully....");

		helper.addAttachment("attachment-document-name.jpg", fds);

		javaMailSender.send(message);

	}

}