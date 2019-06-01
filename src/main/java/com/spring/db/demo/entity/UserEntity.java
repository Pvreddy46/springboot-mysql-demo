//package com.spring.db.demo.entity;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import javax.validation.constraints.NotNull;
//
//@Entity
//@Table(name="USERS")
//public class UserEntity {
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	Long userID;
//	
//	
//	@NotNull
//	@Column(unique=true)
//	String userName;
//	String pwd;
//	String firstName;
//	String lastName;
//	String userRole;
//	String emailId;
//	String mobileNum;
//	@Column(columnDefinition = "varchar(255) default 'INACTIVE'")
//	String status;
//	
//	public String getStatus() {
//		return status;
//	}
//	public void setStatus(String status) {
//		this.status = status;
//	}
//	public String getUserRole() {
//		return userRole;
//	}
//	public void setUserRole(String userRole) {
//		this.userRole = userRole;
//	}
//	public String getEmailId() {
//		return emailId;
//	}
//	public void setEmailId(String emailId) {
//		this.emailId = emailId;
//	}
//	public String getMobileNum() {
//		return mobileNum;
//	}
//	public void setMobileNum(String mobileNum) {
//		this.mobileNum = mobileNum;
//	}
//	public Long getUserID() {
//		return userID;
//	}
//	public void setUserID(Long userID) {
//		this.userID = userID;
//	}
//	public String getUserName() {
//		return userName;
//	}
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//	public String getPwd() {
//		return pwd;
//	}
//	public void setPwd(String pwd) {
//		this.pwd = pwd;
//	}
//	public String getFirstName() {
//		return firstName;
//	}
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//	public String getLastName() {
//		return lastName;
//	}
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//	
//	
//	
//}
