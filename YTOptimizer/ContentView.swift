//
//  ContentView.swift
//  YTOptimizer
//
//  Created by Ryusei on 2024/05/07.
//

import SwiftUI
import RealityKit
import RealityKitContent

struct ContentView: View {
    var body: some View {
        VStack {
            Image("Icon")
                .resizable()    // 画像サイズをフレームサイズに合わせる
                .frame(width: 150, height: 150) // フレームサイズの指定
            
            Text("･ Turn on the YT Optimizer Safari extension from Settings.\n･ Please use desktop mode in safari.\n･ Please go to “Safari > Manage Extensions” to set which buttons to disable")
                .multilineTextAlignment(.leading)
        }
        .padding()
    }
}

#Preview(windowStyle: .automatic) {
    ContentView()
}
