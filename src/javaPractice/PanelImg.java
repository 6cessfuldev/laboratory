package javaPractice;

import java.awt.Image;
import java.io.File;
import java.awt.Graphics;
import java.awt.Dimension;

import javax.swing.ImageIcon;
import javax.swing.JPanel;
import javax.swing.JFrame;


class ImagePanel extends JPanel {
    private Image img;
    
    public ImagePanel(Image img){
        this.img = img;
        setSize(new Dimension(img.getWidth(null),img.getHeight(null)));
        setPreferredSize(new Dimension(img.getWidth(null),img.getHeight(null)));
        setLayout(null);
    }
    
    public void paintComponent(Graphics g){
        g.drawImage(img, 0, 0, null);
    }
}

public class PanelImg {
    
    public static void main(String[] args) {
        JFrame frame = new JFrame("Panel Img");
        frame.setSize(640,480);
        frame.setLocationRelativeTo(null);
        frame.setVisible(true);
        
        ImagePanel panel = new ImagePanel(new ImageIcon("./src/backgroundimg.jpg").getImage());
        
        
        frame.add(panel);
        frame.pack();
        
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
    
}
