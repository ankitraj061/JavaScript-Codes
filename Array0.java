import java.util.Scanner;
class Solution{
    public int display(int[] a,int n,int k){
        for(int  i=0;i<n;i++){
            
        }
        return count;

    }

}
class Array0{
    public static void main(String[] args) {

        Scanner s=new Scanner(System.in);

        System.out.println("Enter the length of array:");
        int length=s.nextInt();

        int arr[]= new int[length];
        System.out.println("Enter the elements of array");
        for(int i=0;i<length;i++){
            arr[i]=s.nextInt();
        }
        System.out.println("Enter the value of K:");
        int k=s.nextInt();

        Solution st=new Solution();
        int result=st.display(arr, length, k);
        System.out.println(result);



    }
}