package com.spring.db.demo.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.db.demo.entity.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long>{

	//@Query("SELECT u FROM users u WHERE LOWER(u.userID) = LOWER(:userID) and LOWER(u.pwd) = LOWER(:pwd)")
   // public List<Users> login(@Param("userID")Long userID, @Param("pwd")String pwd);
    
    @Query("SELECT u FROM Users u WHERE u.userName=?1 and pwd=?2")
    public Users login(String userName,String pwd);

    @Transactional
    @Modifying
    @Query("Delete FROM Users u WHERE u.userName=?1")
	public void delete(String user);

	

}
