package com.spring.db.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.db.demo.model.User;
import com.spring.db.demo.model.UserRequest;
import com.spring.db.demo.repository.UserRepository;
import com.spring.db.demo.security.jwt.JwtProvider;

@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;

	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	JwtProvider jwtProvider;

	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public UserController(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
		this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}

	@PostMapping("/create")
	public User createUser(@RequestBody User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		return userRepository.save(user);
	}

	@GetMapping("/getUsers")
	public ResponseEntity<List<User>> getUserDetails() throws Exception {

		// return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);

		List<User> users = userRepository.findAll();

		if (users.isEmpty()) {
			throw new Exception("No Records found");
		} else
			return ResponseEntity.ok().body(users);
	}

	@GetMapping("/getList")
	public ResponseEntity<List<User>> getUserList() throws Exception {
		throw new Exception("No Records found");
		// return null;

	}

//	@PostMapping("/create")
//	public UserEntity createUser(@RequestBody UserEntity user) {
//		return userRepository.save(user);
//	}

	@PostMapping("/delete")
	public ResponseEntity<List<User>> deleteUser(@RequestBody String user) {
		userRepository.delete(user);
		return ResponseEntity.ok().body(userRepository.findAll());
	}

	@PutMapping("/update")
	public User updateUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@PostMapping("/statusUpdate")
	public ResponseEntity<List<User>> updateUserStatus(@RequestBody UserRequest user) throws Exception {
		System.out.println("userName ** " + user.getUserName() + " Status : " + user.getStatus());

		userRepository.updateStatus(user.getStatus(), user.getUserName());

		List<User> users = userRepository.findAll();
		if (users.isEmpty()) {
			throw new Exception("No Records found");
		} else
			return ResponseEntity.ok().body(users);
	}

//	@PostMapping("/login")
//	public ResponseEntity<UserEntity> loginUser(@RequestBody UserEntity user) throws Exception {
//		// return userRepository.login(user.getUserName(),user.getPwd());
//		System.out.println("loginUser===>>>");
//		UserEntity users = userRepository.login(user.getUserName(), user.getPwd());
//		if (users != null) {
//			System.out.println("users===> "+users.getStatus());
//			if("ACTIVE".equalsIgnoreCase(users.getStatus())) {
//				return ResponseEntity.ok().body(users);
//			}else {
//				throw new Exception("User is disabled");
//			}
//			
//		} else {
//			throw new Exception("User / Password is invalid");
//		}
//
//	}

}
