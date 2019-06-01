package com.spring.db.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.spring.db.demo.model.User;

import java.util.Optional;

import javax.transaction.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email); 
    
    @Transactional
    @Modifying
    @Query("delete from users u WHERE u.username=?1")
	void delete(String user);
    
    @Transactional
    @Modifying
    @Query(value = "update users u set u.status = ? where u.username = ?", nativeQuery = true)
	void updateStatus(String status, String userName);
    
    
//    @Query("SELECT u FROM users u WHERE u.username=?1 and password=?2 ")
//    public User login(String username,String pwd);
//
//    @Transactional
//    @Modifying
//    @Query("Delete FROM users u WHERE u.username=?1")
//	public void delete(String user);
//    
//    @Transactional
//    @Modifying
//    @Query(value = "update users u set u.status = ? where u.username = ?", nativeQuery = true)
//	public void updateStatus(String status,String username );
    
}
