package com.spring.db.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.spring.db.demo.entity.Users;
import com.spring.db.demo.repository.UserRepository;

import net.bytebuddy.implementation.bytecode.Throw;

@RestController
public class UserController {
	@Autowired
	UserRepository userRepository;
	
	@GetMapping("/getUsers")
	public ResponseEntity<List<Users>> getUserDetails() throws Exception
	{
		
	       // return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
	        
		List<Users> users = userRepository.findAll();
		
		if(users.isEmpty()) {
			throw new Exception("No Records found");
		}else
		 return ResponseEntity.ok().body(userRepository.findAll());
	}
	
	
	@GetMapping("/getList")
	public ResponseEntity<List<Users>> getUserList() throws Exception
	{
		throw new Exception("No Records found");
		//return null;
		
	}

	@PostMapping("/create")
	public Users createUser(@RequestBody Users user){
		return userRepository.save(user);
	}
	@PostMapping("/delete")
	public ResponseEntity<List<Users>> deleteUser(@RequestBody String user){
		userRepository.delete(user);
		return  ResponseEntity.ok().body(userRepository.findAll());
	}
	@PutMapping("/update")
	public Users updateUser(@RequestBody Users user){
		 return userRepository.save(user);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Users> loginUser(@RequestBody Users user) throws Exception{
		//return userRepository.login(user.getUserName(),user.getPwd());
		Users users = userRepository.login(user.getUserName(),user.getPwd());
		if(users!=null) {
			return ResponseEntity.ok().body(users);
		}else {
			throw new Exception("User / Password is invalid");
		}
		
	}
	
}
