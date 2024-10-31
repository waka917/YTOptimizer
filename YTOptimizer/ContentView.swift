//
//  ContentView.swift
//  YTOptimizer
//
//  Created by Ryusei on 2024/05/07.
//

import SwiftUI
import RealityKit
import RealityKitContent
import StoreKit

struct ContentView: View {
    
    // メッセージを保持する状態変数
    @State private var message: String = ""
    
    var body: some View {
        VStack {
            Image("Icon")
                .resizable()    // 画像サイズをフレームサイズに合わせる
                .frame(width: 150, height: 150) // フレームサイズの指定
            
            Text("description")
                .multilineTextAlignment(.leading)
        }
        .padding()
        
        
        //Button("ボタン") {
            // ここにボタンが押されたときの処理を書く
            //print("ボタンが押されました")
            //requestReview()
        //}
        
        //Text("受け取ったメッセージ: \(message)")
    }
    
    //ストアレビューポッポアップを表示
    func requestReview() {
        if let scene = UIApplication.shared.connectedScenes.first(where: { $0.activationState == .foregroundActive }) as? UIWindowScene {
            SKStoreReviewController.requestReview(in: scene)
        }
    }
    
    // メッセージを受け取るメソッド
    func receiveMessage(_ newMessage: String) {
        self.message = newMessage
        print("メッセージを受け取りました")
    }
}

#Preview(windowStyle: .automatic) {
    ContentView()
}
