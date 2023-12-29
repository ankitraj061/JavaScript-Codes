class shodowing {
    private int x;

    public void setX(int x) {

        x = x;// CE
        System.out.println(x);// 10
    }

}

public class test {
    public static void main(String[] args) {
        shodowing s = new shodowing();
        s.setX(10);
    }

}
