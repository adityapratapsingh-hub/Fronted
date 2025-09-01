import java.util.*;
class TestFile{
    public static void main(String args[]){
        String str1 = "string Example";
        int lenght =str1.lenght();
        char ch= str1.charA(5);
        int indf =str1.indexof("s");
        int indf1=str1.lastIndexof("s");
        String str2= str1.toUpperCase();
        String str3 =str1.toLowerCase();
        String str4 = str1.replace("g" ,"h");
        System.out.println("total lenght of the String  "+lenght);
        System.out.println("character at the index of 5 in String str1 "+ch);
        System.out.println("printing the first index of 5 from str1 "+indf);
        System.out.println("printing the last index of 5 from str1 "+indf1);
         System.out.println("print Uppar case "+str2);
         System.out.println(" Print Lower case "+str3);
          System.out.println(" replacing"+str4);
    }
}