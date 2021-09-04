package javaPractice;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextArea;
import javax.swing.JTextField;
import javax.swing.JPasswordField;
import javax.swing.JOptionPane;


public class Login extends JFrame{
    public Login(){
        
        JPanel panel = new JPanel();
        JLabel label = new JLabel("ID : ");
        JLabel pswrd = new JLabel("Password : ");
        JTextField txtID = new JTextField(10);
        JPasswordField txtPass = new JPasswordField(10);
        JButton logbtn = new JButton("Log In");
        
        panel.add(label);
        panel.add(txtID);
        panel.add(pswrd);
        panel.add(txtPass);
        panel.add(logbtn);
        
        logbtn.addActionListener(new ActionListener(){
            public void actionPerformed(ActionEvent e){
                String id = "Dan";
                String pass = "1234";
                
                if(id.equals(txtID.getText()) && pass.equals(txtPass.getText())){
                    JOptionPane.showMessageDialog(null, "You have logged in successfully");
                } else {
                    JOptionPane.showMessageDialog(null, "You failed to log in");
                }
            }
        });
        
        add(panel);
        
        
        setVisible(true);
        setSize(480, 360);
        setLocationRelativeTo(null);
        setResizable(true);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    
    public static void main(String args[]){
        new Login();
    }
}


