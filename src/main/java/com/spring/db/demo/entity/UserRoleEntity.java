//package com.spring.db.demo.entity;
//
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.Table;
//
//@Entity
//@Table(name = "USER_ROLES")
//public class UserRoleEntity {
//
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Column(name = "ROLE_ID", unique = true)
//	Long roleId;
//
//	@Column(name = "ROLE_NAME")
//	String roleName;
//
//	@Column(name = "ROLE_DESCRIPTION")
//	String roleDescription;
//
//	public Long getRoleId() {
//		return roleId;
//	}
//
//	public void setRoleId(Long roleId) {
//		this.roleId = roleId;
//	}
//
//	public String getRoleName() {
//		return roleName;
//	}
//
//	public void setRoleName(String roleName) {
//		this.roleName = roleName;
//	}
//
//	public String getRoleDescription() {
//		return roleDescription;
//	}
//
//	public void setRoleDescription(String roleDescription) {
//		this.roleDescription = roleDescription;
//	}
//
//}
