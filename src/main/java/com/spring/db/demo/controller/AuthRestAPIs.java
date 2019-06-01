package com.spring.db.demo.controller;

import java.net.URLEncoder;
import java.util.HashSet;
import java.util.Set;

import javax.mail.Message;
import javax.mail.Session;
import javax.validation.Valid;

import org.jboss.aerogear.security.otp.Totp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.db.demo.model.Role;
import com.spring.db.demo.model.RoleName;
import com.spring.db.demo.model.User;
import com.spring.db.demo.repository.RoleRepository;
import com.spring.db.demo.repository.UserRepository;
import com.spring.db.demo.request.LoginForm;
import com.spring.db.demo.request.OtpForm;
import com.spring.db.demo.request.SignUpForm;
import com.spring.db.demo.response.JwtResponse;
import com.spring.db.demo.response.ResponseMessage;
import com.spring.db.demo.security.jwt.JwtProvider;


@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class AuthRestAPIs {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;
    
  
    
    public static final String TOKEN_INVALID = "invalidToken";
    public static final String TOKEN_EXPIRED = "expired";
    public static final String TOKEN_VALID = "valid";

    public static String QR_PREFIX = "https://chart.googleapis.com/chart?chs=200x200&chld=M%%7C0&cht=qr&chl=";
    public static String APP_NAME = "HKSS";
    

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtProvider.generateJwtToken(authentication);
        UserDetails userDetails = (UserDetails) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
    }
    
    @PostMapping("/validateOTP")
    public ResponseEntity<?> authenticateOTP(@Valid @RequestBody OtpForm otpRequest) {

    	 if (!userRepository.existsByUsername(otpRequest.getUsername())) {
             return new ResponseEntity<>(new ResponseMessage("Fail -> Invalid Request!"),
                     HttpStatus.BAD_REQUEST);
         }
    	 User user = userRepository.findByUsername(otpRequest.getUsername()).orElseThrow(
                 () -> new UsernameNotFoundException("User Not Found with -> username or email : " + otpRequest.getUsername()));
    	 
    	 
    	 Totp totp = new Totp(user.getSecret());
         if (!isValidLong(otpRequest.getOtp()) || totp.verify(otpRequest.getOtp())) {
             throw new BadCredentialsException("Invalid verfication code");
         }
         return ResponseEntity.ok(user);
    }

    private boolean isValidLong(String code) {
        try {
            Long.parseLong(code);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }
    
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpForm signUpRequest) throws Exception {
        if (userRepository.existsByUsername(signUpRequest.getUsername())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Username is already taken!"),
                    HttpStatus.BAD_REQUEST);
        }

        if (userRepository.existsByEmail(signUpRequest.getEmail())) {
            return new ResponseEntity<>(new ResponseMessage("Fail -> Email is already in use!"),
                    HttpStatus.BAD_REQUEST);
        }

        // Creating user's account
        User user = new User(signUpRequest.getFirstname(),signUpRequest.getLastname(), signUpRequest.getUsername(), signUpRequest.getEmail(),
                encoder.encode(signUpRequest.getPassword()),signUpRequest.getMobile());

        Set<String> strRoles = signUpRequest.getRole();
        Set<Role> roles = new HashSet<>();

        if (strRoles.isEmpty()) {
            Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
            roles.add(userRole);
        } else {
            strRoles.forEach(role -> {
                switch (role) {
                    case "admin":
                        Role adminRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
                                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                        roles.add(adminRole);

                        break;
//                    case "pm":
//                        Role pmRole = roleRepository.findByName(RoleName.ROLE_PM)
//                                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
//                        roles.add(pmRole);
//
//                        break;
                    default:
                        Role userRole = roleRepository.findByName(RoleName.ROLE_USER)
                                .orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
                        roles.add(userRole);
                }
            });
        }

        user.setRoles(roles);
        userRepository.save(user);
        
      String QR=  QR_PREFIX + URLEncoder.encode(String.format("otpauth://totp/%s:%s?secret=%s&issuer=%s", APP_NAME, user.getEmail(), user.getSecret(), APP_NAME));
      //mail.sendEmail(QR);
     // mail.buildSimpleSession();
      //mail.buildMessageWithEmbeddedImage( mail.buildSimpleSession(),QR);
      
      Session session = MailSender.buildGoogleSession();
      Message withImage = MailSender.buildMessageWithEmbeddedImage( session,QR);
      MailSender.addressAndSendMessage(withImage, "pvreddy.java@gmail.com");
      
      System.out.println("user.getEmail() =====> "+user.getEmail());
      System.out.println("user.getEmail() =====> "+user.getSecret()); 
      System.out.println("QR =====> "+QR);
        return new ResponseEntity<>(new ResponseMessage("User registered successfully!"), HttpStatus.OK);
    }
    
    
    
    
    
    

}
